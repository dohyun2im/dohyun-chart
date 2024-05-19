"use client";

import LoadingIcon from "@/components/LoadingIcon";
import SqlQueryEditor from "@/components/SqlQueryEditor";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

const SqlQueryEditorCard: React.FC = () => {
  const [sql, setSql] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnClickButton = async () => {
    setLoading(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
  };

  const handleOnChangeSqlQueryEditor = (val?: string) => {
    if (!val || loading) return;
    setSql(val);
  };

  return (
    <Stack spacing={1}>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography fontWeight={600}>SQL Editor</Typography>
        <Button disabled={loading} variant="contained" size="small" onClick={handleOnClickButton}>
          RUN
        </Button>
      </Box>

      <Card sx={{ position: "relative", height: 240, ...(loading && { pointerEvents: "none" }) }}>
        <SqlQueryEditor value={sql} onChange={handleOnChangeSqlQueryEditor} />
        <Box
          sx={{
            display: loading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 240,
            opacity: 0.3,
            background: grey[100]
          }}
        >
          <LoadingIcon color="inherit" fontSize="large" />
        </Box>
      </Card>
    </Stack>
  );
};

export default SqlQueryEditorCard;
