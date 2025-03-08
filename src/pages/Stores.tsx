import React, { useState } from "react";
import {
    Box,
    Typography,
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
import { DragIndicator } from "@mui/icons-material";
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided } from "@hello-pangea/dnd";
import DeleteIcon from "../assets/delete.png";
const Stores: React.FC = () => {
    const [stores, setStores] = useState([
        { id: 1, name: "Atlanta Outfitters", city: "Atlanta", state: "GA" },
        { id: 2, name: "Chicago Charm Boutique", city: "Chicago", state: "IL" },
        { id: 3, name: "Houston Harvest Market", city: "Houston", state: "TX" },
        { id: 4, name: "Seattle Skyline Goods", city: "Seattle", state: "WA" },
        { id: 5, name: "Miami Breeze Apparel", city: "Miami", state: "FL" },
    ]);
    const [newStore, setNewStore] = useState<{ id: number; name: string; city: string; state: string } | null>(null);
    const handleAddNewStore = () => {
        setNewStore({ id: Date.now(), name: "", city: "", state: "" });
    };
    const handleInputChange = (field: string, value: string) => {
        if (newStore) {
            setNewStore({ ...newStore, [field]: value });
        }
    };
    const handleSaveStore = () => {
        if (newStore && newStore.name && newStore.city && newStore.state) {
            setStores([...stores, newStore]);
            setNewStore(null);
        }
    };
    const handleDelete = (id: number) => {
        setStores(stores.filter((store) => store.id !== id));
    };
    const handleDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = Array.from(stores);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setStores(items);
    };
    return (
        <Box sx={{ p: 0, ml: 0, width: "100%" }}>
            <TableContainer component={Paper} sx={{ width: "auto", marginLeft: 0 }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                                <TableCell align="center"><strong>Actions</strong></TableCell>
                                <TableCell align="center"><strong>S.NO</strong></TableCell>
                                <TableCell align="left"><strong>Store</strong></TableCell>
                                <TableCell align="left"><strong>City</strong></TableCell>
                                <TableCell align="left"><strong>State</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <Droppable droppableId="stores">
                            {(provided: DroppableProvided) => (
                                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                                    {stores.map((store, index) => (
                                        <Draggable key={store.id} draggableId={store.id.toString()} index={index}>
                                            {(provided: DraggableProvided) => (
                                                <TableRow ref={provided.innerRef} {...provided.draggableProps}>
                                                    <TableCell align="center">
                                                        <IconButton onClick={() => handleDelete(store.id)} sx={{ color: "black" }}>
                                                            <img src={DeleteIcon} alt="Delete" style={{ width: 24, height: 24 }} />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell align="center" {...provided.dragHandleProps}>
                                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                                                            <DragIndicator sx={{ color: "#777", transform: "rotate(90deg)" }} />
                                                            <Typography variant="body2">{index + 1}</Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell align="left">{store.name}</TableCell>
                                                    <TableCell align="left">{store.city}</TableCell>
                                                    <TableCell align="left">{store.state}</TableCell>
                                                </TableRow>
                                            )}
                                        </Draggable>
                                    ))}
                                    {newStore && (
                                        <TableRow>
                                            <TableCell align="center">
                                                <Button variant="contained" color="success" onClick={handleSaveStore}>Save</Button>
                                            </TableCell>
                                            <TableCell align="center">-</TableCell>
                                            <TableCell align="left">
                                                <TextField
                                                    size="small"
                                                    value={newStore.name}
                                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                                    placeholder="Enter Store Name"
                                                />
                                            </TableCell>
                                            <TableCell align="left">
                                                <TextField
                                                    size="small"
                                                    value={newStore.city}
                                                    onChange={(e) => handleInputChange("city", e.target.value)}
                                                    placeholder="Enter City"
                                                />
                                            </TableCell>
                                            <TableCell align="left">
                                                <TextField
                                                    size="small"
                                                    value={newStore.state}
                                                    onChange={(e) => handleInputChange("state", e.target.value)}
                                                    placeholder="Enter State"
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )}
                                    {provided.placeholder}
                                </TableBody>
                            )}
                        </Droppable>
                    </Table>
                </DragDropContext>
            </TableContainer>
            <Button variant="contained" color="warning" sx={{ mt: 2 }} onClick={handleAddNewStore}>
                NEW STORE
            </Button>
        </Box>
    );
};
export default Stores;

