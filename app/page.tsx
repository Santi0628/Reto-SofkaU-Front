import type { Metadata } from "next";
import { Box } from "@mui/material";
import Login from "./components/Login";

export default function IndexPage() {
  return <Box height='100%'>
      <Login />
    </Box>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
