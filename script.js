window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Laporan Penjualan Tahun 2022 dan 2023"
        },
        axisX: {
            interval: 1,
            title: "Bulan"
        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Jumlah Penjualan"
        },
        data: [
            {
                type: "bar",
                name: "2022",
                color: "#014D65",
                axisYType: "secondary",
                dataPoints: [
                    { y: 4017, label: "Januari" },
                    { y: 6135, label: "Februari" },
                    { y: 7091, label: "Maret" },
                    { y: 5841, label: "April" },
                    { y: 5036, label: "Mei" },
                    { y: 4547, label: "Juni" },
                    { y: 3467, label: "Juli" },
                    { y: 3970, label: "Agustus" },
                    { y: 6313, label: "September" },
                    { y: 3595, label: "Oktober" },
                    { y: 9207, label: "November" },
                    { y: 5945, label: "Desember" }
                ]
            },
            {
                type: "bar",
                name: "2023",
                color: "#FF5733",
                axisYType: "secondary",
                dataPoints: [
                    { y: 2416, label: "Januari" },
                    { y: 4136, label: "Februari" },
                    { y: 7935, label: "Maret" },
                    { y: 8004, label: "April" },
                    { y: 9505, label: "Mei" },
                    { y: 5026, label: "Juni" },
                    { y: 6108, label: "Juli" },
                    { y: 6343, label: "Agustus" },
                    { y: 9404, label: "September" },
                    { y: 9280, label: "Oktober" },
                    { y: 9287, label: "November" },
                    { y: 8689, label: "Desember" }
                ]
            }
        ]
    });
    chart.render();
}
