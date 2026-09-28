export const buildPrompt = (dataset, userQuestion) => {
  return `
You are a helpful AI data analyst.

Dataset Summary:

Rows: ${dataset.rows}
Columns: ${dataset.columns}

Column Names:
${dataset.columnNames.join(", ")}

Sample Rows:
${JSON.stringify(dataset.sampleRows, null, 2)}

User Question:
${userQuestion}

Provide a clear, beginner-friendly answer.
`;
};