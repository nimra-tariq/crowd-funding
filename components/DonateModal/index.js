import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Units } from "../../constants";
import { Paper, Select, MenuItem } from "@mui/material";
import useDonateFund from "../../hooks/useDonateFund";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [unit, setUnit] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState("0");

  const { donate } = useDonateFund(amount, unit);

  return (
    <div>
      <button
        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={handleOpen}
      >
        Doante
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className="text-indigo-900 text-2xla" variant="h6" component="h2">
            Donate Fund
          </Typography>
          <Typography id="modal-modal-description" className="text-red-900" sx={{ mt: 2 }}>
           Minimum 100 wei required
          </Typography>
          <div className="relative mb-4">
            <label
              htmlFor="amount-needed"
              className="leading-7 text-sm text-indigo-900"
            >
              Enter Amount
            </label>
            <input
              required
              type="number"
              id="amount-needed"
              name="amount-needed"
              value={amount || "0"}
              min="0"
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <Paper>
              <Select
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                }}
              >
                {Units.map((type, i) => {
                  return (
                    <MenuItem key={i} value={type.val}>
                      {type.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </Paper>
            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => donate()}
            >
              Confirm Doante
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
