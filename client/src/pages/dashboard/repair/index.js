import React from "react";
import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";
import {
  Grid,
  Button,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexGrow: 1
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pl: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const Repair = (props) => {
  const [open, setOpen] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setNext(false);
  };
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = [
    { label: "Sl", minWidth: 10, maxWidth: 30 },
    { label: "Location", minWidth: 50, maxWidth: 100 },
    { label: "Devices", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Assignee", minWidth: 50, maxWidth: 100 },
    { label: "Customer", minWidth: 50, maxWidth: 100 },
    { label: "Sales", minWidth: 50, maxWidth: 100 },
    { label: "Receipts", minWidth: 50, maxWidth: 100 },
    { label: "Dates", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createData = (loc, devices, status, assignee, cust, sales, receipts, date) => {
    return { loc, devices, status, assignee, cust, sales, receipts, date };
  };

  const rows = [
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022"),
    createData("Default", "Apple", "In Repair", "-", "Customer name", "0.00", "0.00", "10-02-2022")
  ];

  return (
    <>
      <Grid container sx={{ p: 2 }} direction="column">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              {next ? (
                <Grid container direction="column" rowSpacing={2}>
                  <Grid item container justifyContent="center">
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="span" color="primary">
                        Repair Information
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        label="Repair Description"
                        multiline
                        rows={5}
                        maxRows={7}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField size="small" label="Estimated Time" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField size="small" label="Cost" fullWidth />
                    </Grid>
                  </Grid>

                  <Grid item container justifyContent="right">
                    <Button sx={{ mr: 1 }} variant="text" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="text" sx={{ mr: 1 }} onClick={() => setNext(false)}>
                      Back
                    </Button>
                    <Button variant="contained">Submit</Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container direction="column" rowSpacing={2}>
                  <Grid item container justifyContent="center">
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="span" color="primary">
                        Create Contact
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField size="small" label="First Name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField size="small" label="Last Name" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField size="small" label="Company" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField size="small" label="Zip Code" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="abcd">Type</InputLabel>
                        <Select size="small" value={1} labelId="abcd" label="Type">
                          <MenuItem value={1}>Demo</MenuItem>
                          <MenuItem value={2}>Demo</MenuItem>
                          <MenuItem value={3}>Demo</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField size="small" label="Email" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField size="small" label="Primary Phone" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField size="small" label="Alt Phone" fullWidth />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField size="small" label="Mobile Phone" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="1234">Carrier</InputLabel>
                        <Select size="small" value={1} labelId="1234" label="Carrier">
                          <MenuItem value={1}>Demo</MenuItem>
                          <MenuItem value={2}>Demo</MenuItem>
                          <MenuItem value={3}>Demo</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item container justifyContent="right">
                    <Button sx={{ mr: 1 }} variant="text" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="text" onClick={() => setNext(true)}>
                      Next
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Fade>
        </Modal>
        <Grid item container justifyContent="space-between" sx={{ mb: 2 }}>
          <Grid item>
            <Typography variant="h4">Repair</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
              Add
            </Button>
          </Grid>
        </Grid>
        <Grid item container>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((column, id) => (
                  <TableCell align="center">{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.loc}</TableCell>
                  <TableCell align="center">{row.devices}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.assignee}</TableCell>
                  <TableCell align="center">{row.cust}</TableCell>
                  <TableCell align="center">{row.sales}</TableCell>
                  <TableCell align="center">{row.receipts}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};

Repair.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Repair;
