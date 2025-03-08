import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
const stores = [
  { id: 1, name: "Nashville Melody Music Store" },
  { id: 2, name: "Atlanta Outfitters"},
  { id: 3, name: "Houston Harvest Market"},
  { id: 4, name: "Seattle Skyline Goods"},
  { id: 5, name: "Miami Breeze Apparel"},
  { id: 6, name: "Chicago Charm Boutique"},
];
const skus = [
  { id: 101, name: "Metallic Hoop Earrings", price: 114.99, cost: 18.28 },
  { id: 102, name: "V-Neck T-Shirt", price: 24.99, cost: 5.5 },
  { id: 103, name: "Crew Neck Merino Wool Sweater", price: "$114.99", cost: "$18.28" },
  { id: 104, name: "V-Neck Cotton T-Shirt", price: "$24.99", cost: "$5.50" },
  { id: 105, name: "Slim Fit Denim Jeans", price: "$49.99", cost: "$12.75" },
  { id: 106, name: "Leather Chelsea Boots", price: "$129.99", cost: "$40.00" },
  { id: 107, name: "Classic Oxford Shirt", price: "$39.99", cost: "$10.20" }
];
const weeks = [
  { id: "week1", name: "Week 1" },
  { id: "week2", name: "Week 2" },
];
type RowDataType = {
  store: string;
  sku: string;
  price: number;
  cost: number;
  [key: string]: string | number;
};
const colors = ["#4CAF50", "#FFEB3B", "#E91E63", "#FF9800"];
const Planning = () => {
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const [rowData, setRowData] = useState<RowDataType[]>(
    stores.flatMap((store) =>
      skus.map((sku) => ({
        store: store.name,
        sku: sku.name,
        price: Number(sku.price), 
        cost: Number(sku.cost), 
        ...Object.fromEntries(weeks.map((week) => [`salesUnits_${week.id}`, 0])),
      }))
    )
  );
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: string
  ) => {
    const newValue = parseInt(event.target.value) || 0;
    setRowData((prev) => {
      const newData = [...prev];
      newData[index] = { ...newData[index], [field]: newValue };
      return newData;
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table>
      <TableHead>
  <TableRow>
    <TableCell rowSpan={2} sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>
      Store
    </TableCell>
    <TableCell rowSpan={2} sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>
      SKU
    </TableCell>
    {weeks.map((week) => (
      <TableCell key={week.id} colSpan={4} align="center" sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>
        {week.name}
      </TableCell>
    ))}
  </TableRow>
  <TableRow>
    {weeks.map((week) => (
      <React.Fragment key={week.id}>
        <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>Sales Units</TableCell>
        <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>Sales $</TableCell>
        <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>GM $</TableCell>
        <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>GM %</TableCell>
      </React.Fragment>
    ))}
  </TableRow>
</TableHead>
<TableBody>
  {rowData.map((row, index) => (
    <TableRow key={index}>
      <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>{row.store}</TableCell>
      <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>{row.sku}</TableCell>
      {weeks.map((week) => {
        const salesUnits = (row[`salesUnits_${week.id}`] as number) ?? 0;
        const salesDollars = salesUnits * row.price;
        const gmDollars = salesUnits * (row.price - row.cost);
        const gmPercent = salesDollars ? (gmDollars / salesDollars) * 100 : 0;
        return (
          <React.Fragment key={week.id}>
            <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>
              <TextField
                type="number"
                value={salesUnits}
                onChange={(e) => handleInputChange(e, index, `salesUnits_${week.id}`)}
                size="small"
                style={{ width: 60 }}
              />
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>${salesDollars.toFixed(2)}</TableCell>
            <TableCell sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.2)" }}>${gmDollars.toFixed(2)}</TableCell>
            <TableCell
              sx={{
                borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                backgroundColor: getRandomColor(),
                fontWeight: "bold",
              }}
            >
              {gmPercent.toFixed(2)}%
            </TableCell>
          </React.Fragment>
        );
      })}
    </TableRow>
  ))}
</TableBody>
      </Table>
    </TableContainer>
  );
};
export default Planning;