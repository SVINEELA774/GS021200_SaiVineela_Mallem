import React, { useState } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    TextField,
} from "@mui/material";
import DeleteIcon from "../assets/delete.png";
const SKUs: React.FC = () => {
    const [skus, setSkus] = useState([
        { name: "Crew Neck Merino Wool Sweater", price: "$114.99", cost: "$18.28" },
        { name: "V-Neck Cotton T-Shirt", price: "$24.99", cost: "$5.50" },
        { name: "Slim Fit Denim Jeans", price: "$49.99", cost: "$12.75" },
        { name: "Leather Chelsea Boots", price: "$129.99", cost: "$40.00" },
        { name: "Classic Oxford Shirt", price: "$39.99", cost: "$10.20" }
    ]);
    const [newSKU, setNewSKU] = useState({ name: "", price: "", cost: "" });
    const [isAdding, setIsAdding] = useState(false);
    const handleDelete = (index: number) => {
        setSkus(skus.filter((_, i) => i !== index));
    };
    const handleChange = (field: string, value: string) => {
        setNewSKU({ ...newSKU, [field]: value });
    };
    const handleSave = () => {
        if (newSKU.name.trim() && newSKU.price.trim() && newSKU.cost.trim()) {
            setSkus([...skus, newSKU]);
            setNewSKU({ name: "", price: "", cost: "" });
            setIsAdding(false);
        }
    };
    return (
        <Box sx={{ p: 0, ml: 0, width: "100%" }}>
            <TableContainer component={Paper} sx={{ width: "auto", marginLeft: 0 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                            <TableCell align="center"><strong>Action</strong></TableCell>
                            <TableCell align="left"><strong>SKU</strong></TableCell>
                            <TableCell align="left"><strong>Price</strong></TableCell>
                            <TableCell align="left"><strong>Cost</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skus.map((sku, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleDelete(index)} sx={{ color: "black" }}>
                                        <img src={DeleteIcon} alt="Delete" style={{ width: 24, height: 24 }} />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="left">{sku.name}</TableCell>
                                <TableCell align="left">{sku.price}</TableCell>
                                <TableCell align="left">{sku.cost}</TableCell>
                            </TableRow>
                        ))}
                        {isAdding && (
                            <TableRow>
                                <TableCell align="center">
                                    <Button variant="contained" color="success" onClick={handleSave}>Save</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <TextField
                                        size="small"
                                        value={newSKU.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                        placeholder="Enter SKU Name"
                                        fullWidth
                                    />
                                </TableCell>
                                <TableCell align="left">
                                    <TextField
                                        size="small"
                                        value={newSKU.price}
                                        onChange={(e) => handleChange("price", e.target.value)}
                                        placeholder="Enter Price"
                                        fullWidth
                                    />
                                </TableCell>
                                <TableCell align="left">
                                    <TextField
                                        size="small"
                                        value={newSKU.cost}
                                        onChange={(e) => handleChange("cost", e.target.value)}
                                        placeholder="Enter Cost"
                                        fullWidth
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!isAdding && (
                <Button variant="contained" color="warning" sx={{ mt: 2 }} onClick={() => setIsAdding(true)}>
                    NEW SKU
                </Button>
            )}
        </Box>
    );
};
export default SKUs;
