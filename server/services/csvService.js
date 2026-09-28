import fs from "fs";
import Papa from "papaparse";

const getMinMax = (values) => {
  let min = values[0];
  let max = values[0];

  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    if (value < min) min = value;
    if (value > max) max = value;
  }

  return { min, max };
};

export const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const file = fs.readFileSync(filePath, "utf8");

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const data = results.data;

        const rows = data.length;
        const columnNames = Object.keys(data[0] || {});
        const columns = columnNames.length;

        let missingValues = 0;

        const missingPerColumn = {};
        const columnTypes = {};
        const numericColumns = [];
        const categoricalColumns = {};

        // Detect column types and missing values
        columnNames.forEach((column) => {
          let missing = 0;
          let numeric = true;

          data.forEach((row) => {
            const value = row[column];

            if (
              value === "" ||
              value === null ||
              value === undefined
            ) {
              missing++;
              missingValues++;
            } else if (isNaN(Number(value))) {
              numeric = false;
            }
          });

          missingPerColumn[column] = missing;

          if (numeric) {
            columnTypes[column] = "numeric";
            numericColumns.push(column);
          } else {
            columnTypes[column] = "categorical";
            categoricalColumns[column] = true;
          }
        });

        // Convert object to array
        const categoricalColumnList = Object.keys(categoricalColumns);

        // ----------------------------
        // Statistics
        // ----------------------------

        const statistics = {};

        numericColumns.forEach((column) => {
          const values = data
            .map((row) => Number(row[column]))
            .filter((value) => !isNaN(value));

          if (values.length === 0) return;

          values.sort((a, b) => a - b);

          const sum = values.reduce((a, b) => a + b, 0);

          const mean = sum / values.length;

          const median =
            values.length % 2 === 0
              ? (values[values.length / 2 - 1] +
                  values[values.length / 2]) /
                2
              : values[Math.floor(values.length / 2)];

          statistics[column] = {
            count: values.length,
            mean: Number(mean.toFixed(2)),
            median: Number(median.toFixed(2)),
            min: values[0],
            max: values[values.length - 1],
          };
        });

        // ----------------------------
        // Chart Data
        // ----------------------------

        const chartData = {};

        // Categorical columns
        categoricalColumnList.forEach((column) => {
          const counts = {};

          data.forEach((row) => {
            const value = row[column] || "Missing";
            counts[value] = (counts[value] || 0) + 1;
          });

          chartData[column] = {
            type: "categorical",
            labels: Object.keys(counts),
            values: Object.values(counts),
          };
        });

        // Numeric columns
        numericColumns.forEach((column) => {
          const values = data
            .map((row) => Number(row[column]))
            .filter((value) => !isNaN(value));

          if (values.length === 0) return;

          const { min, max } = getMinMax(values);

          const bins = 5;
          const step = (max - min) / bins || 1;

          const labels = [];
          const counts = new Array(bins).fill(0);

          for (let i = 0; i < bins; i++) {
            const start = min + i * step;
            const end = start + step;

            labels.push(`${start.toFixed(1)} - ${end.toFixed(1)}`);
          }

          values.forEach((value) => {
            let index = Math.floor((value - min) / step);

            if (index >= bins) index = bins - 1;

            counts[index]++;
          });

          chartData[column] = {
            type: "numeric",
            labels,
            values: counts,
          };
        });

        resolve({
          rows,
          columns,

          columnNames,

          missingValues,

          missingPerColumn,

          columnTypes,

          numericColumns,

          categoricalColumns: categoricalColumnList,

          statistics,

          chartData,

          sampleRows: data.slice(0, 5),

          preview: data.slice(0, 10),

          data,
        });
      },

      error: (err) => reject(err),
    });
  });
};