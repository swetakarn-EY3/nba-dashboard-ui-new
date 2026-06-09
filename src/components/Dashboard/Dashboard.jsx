import {
  Box,
  CircularProgress,
  Container,
  Typography,
  
} from "@mui/material";

import React from "react";

import dashboardData from "../../mock/dashboard.json";
import SelectField from "../Common/SelectField";
import CardComponent from "../Common/Card";

export default function Dashboard() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Filters state
  const [risk, setRisk] = React.useState("");
  const [productType, setProductType] = React.useState("");
  const [policyId, setPolicyId] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setData(dashboardData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px"
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

      {/* ✅ Header Section */}
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: 3
  }}
>
  {/* LEFT: TITLE */}
  <Typography variant="h6" fontWeight={600}>
    Advisory Dashboard
  </Typography>

  {/* RIGHT: FILTERS */}
  <Box sx={{ display: "flex", gap: 3 }}>
    
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="caption" color="text.secondary">
        Risk
      </Typography>
      <SelectField value={risk} onChange={(e) => setRisk(e.target.value)} options={["All"]} />
    </Box>

    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="caption" color="text.secondary">
        Product Type
      </Typography>
      <SelectField value={productType} onChange={(e) => setProductType(e.target.value)} options={["All"]} />
    </Box>

    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="caption" color="text.secondary">
        Policy ID
      </Typography>
      <SelectField value={policyId} onChange={(e) => setPolicyId(e.target.value)} options={["All"]} />
    </Box>

  </Box>
</Box>


      {/* ✅ Policy Summary Card */}
     <CardComponent>
  <Typography variant="subtitle1" fontWeight={600} mb={2}>
    Policy Summary
  </Typography>

  <Box sx={{ display: "flex", alignItems: "center" }}>
    
    {/* Column 1 */}
    <Box sx={{ flex: 1 }}>
      <Typography variant="body2" color="text.secondary">
        Total Portfolio Value
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        $ {data.totalValue}
      </Typography>
    </Box>

    {/* Divider */}
    <Box sx={{ width: "1px", height: "40px", backgroundColor: "#e0e0e0" }} />

    {/* Column 2 */}
    <Box sx={{ flex: 1, px: 2 }}>
      <Typography variant="body2" color="text.secondary">
        Total Policies
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        {data.totalPolicies}
      </Typography>
    </Box>

    {/* Divider */}
    <Box sx={{ width: "1px", height: "40px", backgroundColor: "#e0e0e0" }} />

    {/* Column 3 */}
    <Box sx={{ flex: 1 }}>
      <Typography variant="body2" color="text.secondary">
        Avg Policy Size
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        $ {data.avgPolicySize}
      </Typography>
    </Box>

  </Box>
</CardComponent>
    </Container>
  );
}
