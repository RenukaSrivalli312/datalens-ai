import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#f97316",
  "#14b8a6",
];

const getColors = (count) =>
  Array.from({ length: count }, (_, i) => COLORS[i % COLORS.length]);

function ChartSection({ chartData }) {
  if (!chartData) return null;

  return (
    <div className="card">
      <h2>📊 Dataset Visualizations</h2>

      {Object.entries(chartData).map(([column, chart]) => {
        const lower = column.toLowerCase();

        // Skip useless columns
        if (
          lower.includes("id") ||
          lower.includes("latitude") ||
          lower.includes("longitude") ||
          lower.includes("address")
        ) {
          return null;
        }

        // Skip charts having too many unique values
        if (chart.labels && chart.labels.length > 12) {
          return null;
        }

        return (
          <div
            key={column}
            style={{
              marginBottom: "60px",
              paddingBottom: "30px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "20px",
                textTransform: "capitalize",
              }}
            >
              {column.replaceAll("_", " ")}
            </h3>

            {chart.type === "categorical" ? (
              <div
                style={{
                  maxWidth: "450px",
                  margin: "0 auto",
                }}
              >
                <Pie
                  data={{
                    labels: chart.labels,
                    datasets: [
                      {
                        data: chart.values,
                        backgroundColor: getColors(chart.values.length),
                        borderColor: "#ffffff",
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: "bottom",
                        labels: {
                          padding: 20,
                          usePointStyle: true,
                        },
                      },
                    },
                  }}
                />
              </div>
            ) : (
              <Bar
                data={{
                  labels: chart.labels,
                  datasets: [
                    {
                      label: column,
                      data: chart.values,
                      backgroundColor: "#2563eb",
                      borderRadius: 8,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                      },
                    },
                  },
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ChartSection;