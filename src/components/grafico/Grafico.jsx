import React, { Component } from "react";
// import Chart from "react-apexcharts";
import { Button, Card, Stack, Typography } from "@mui/material";
import IconBack from "@mui/icons-material/ArrowBackIos";
import IconNext from "@mui/icons-material/ArrowForwardIos";
import dynamic from 'next/dynamic'

// IMPORT COMPONENTE CHARTS SEM SSR
//LINK EXPICANDO:
// https://stackoverflow.com/questions/67784672/react-next-js-doesnt-seem-to-work-with-apexcharts

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

class Grafico extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          lines:{
            show:true,
          },
          categories: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
        },
      },
      tooltip: {
        enabled: true,
        y: {
          show: true,
          formatter: function (value) {
            return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
          },
        },
        x: {
          show: false,
        },
      },
      chart: {
        type: "area",
        height: 250,
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 15,
          left: 0,
          blur: 8,
          color: "#000",
          opacity: 0.16,
        },
      },
      stroke: {
        curve: "straight",
      },

      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <Card sx={{ p: 3 }}>
        <Typography component="h1" variant="h4" sx={{mb:0.5}}>
          Histórico do Simples Nacional
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Mês de Vencimento x Valor (R$)
        </Typography>
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
              />
            </div>
          </div>
        </div>

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button
            variant="link"
            sx={{
              color: "#42403e",
              fontWeight: "400",
              fontSize: "0.875rem",
              "&:hover": { textDecoration: "underline" },
            }}
            startIcon={<IconBack color="inherit" />}
            disableRipple>
            Voltar para 2020
          </Button>
          <Typography variant="body2" sx={{ fontWeight: "500" }}>
            Ano de 2021
          </Typography>
          <Button
            variant="link"
            sx={{
              color: "#42403e",
              fontWeight: "400",
              fontSize: "0.875rem",
              "&:hover": { textDecoration: "underline" },
            }}
            endIcon={<IconNext color="inherit" />}
            disableRipple>
            Avancar para 2020
          </Button>
        </Stack>
      </Card>
    );
  }
}

export default Grafico;
