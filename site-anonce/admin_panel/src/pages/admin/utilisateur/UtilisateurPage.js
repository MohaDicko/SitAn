import React, { useState } from "react";
import { useAdmin } from "./UtilisateurContext";

import {
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const UtilisateurPage = () => {
  const { users, addUser, updateUser, deleteUser } = useAdmin();
  const [newUser, setNewUser] = useState({ fullname: "", email: "", role: "" });
  const [editUser, setEditUser] = useState(null);

  const handleAddUser = () => {
    addUser(newUser);
    setNewUser({ fullname: "", username: "", role: "" });
  };

  const handleUpdateUser = () => {
    updateUser(editUser._id, editUser);
    console.log(editUser._id + editUser)
    setEditUser(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Utilisateur</h1>
      <Paper className="p-4 mb-4">
        <h2 className="text-xl mb-2">Ajouter un utilisateur</h2>
        <div className="flex space-x-2 mb-2">
          <TextField
            label="Nom"
            value={newUser.fullname}
            onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Email"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            variant="outlined"
            fullWidth
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Rôle</InputLabel>
            <Select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              label="Rôle"
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="docteur">Docteur</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Ajouter
        </Button>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Email</TableCell>
              
              <TableCell>Rôle</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.username}</TableCell>
                
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setEditUser(user)}
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUser(user._id)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {editUser && (
        <Dialog open={true} onClose={() => setEditUser(null)}>
          <DialogTitle>Modifier l'utilisateur</DialogTitle>
          <DialogContent>
            <TextField
              label="Nom"
              value={editUser.fullname}
              onChange={(e) => setEditUser({ ...editUser, fullname: e.target.value })}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={editUser.username}
              onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Rôle</InputLabel>
              <Select
                value={editUser.role}
                onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
                label="Rôle"
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="docteur">Docteur</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditUser(null)} color="primary">
              Annuler
            </Button>
            <Button onClick={handleUpdateUser} color="primary">
              Enregistrer
            </Button>
          </DialogActions>
        </Dialog>
      )}

    
    </div>
  );
};

export default UtilisateurPage;