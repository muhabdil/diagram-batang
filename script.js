window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true, // Aktifkan animasi
        animationDuration: 1500, // Durasi animasi
        title: {
            text: "Laporan Penjualan Tahun 2022 dan 2023"
        },
        axisX: {
            title: "Jumlah Penjualan",
            valueFormatString: "#,##0", // Format angka
            gridColor: "rgba(1,77,101,.1)"
        },
        axisY: {
            title: "Bulan",
            interval: 1 // Menampilkan semua label bulan
        },
        data: [
            {
                type: "bar", // Tipe horizontal bar
                name: "2022",
                color: "#014D65",
                showInLegend: true,
                dataPoints: [
                    { y: 1, x: 4017, label: "Januari" },
                    { y: 2, x: 6135, label: "Februari" },
                    { y: 3, x: 7091, label: "Maret" },
                    { y: 4, x: 5841, label: "April" },
                    { y: 5, x: 5036, label: "Mei" },
                    { y: 6, x: 4547, label: "Juni" },
                    { y: 7, x: 3467, label: "Juli" },
                    { y: 8, x: 3970, label: "Agustus" },
                    { y: 9, x: 6313, label: "September" },
                    { y: 10, x: 3595, label: "Oktober" },
                    { y: 11, x: 9207, label: "November" },
                    { y: 12, x: 5945, label: "Desember" }
                ]
            },
            {
                type: "bar", // Tipe horizontal bar
                name: "2023",
                color: "#FF5733",
                showInLegend: true,
                dataPoints: [
                    { y: 1, x: 2416, label: "Januari" },
                    { y: 2, x: 4136, label: "Februari" },
                    { y: 3, x: 7935, label: "Maret" },
                    { y: 4, x: 8004, label: "April" },
                    { y: 5, x: 9505, label: "Mei" },
                    { y: 6, x: 5026, label: "Juni" },
                    { y: 7, x: 6108, label: "Juli" },
                    { y: 8, x: 6343, label: "Agustus" },
                    { y: 9, x: 9404, label: "September" },
                    { y: 10, x: 9280, label: "Oktober" },
                    { y: 11, x: 9287, label: "November" },
                    { y: 12, x: 8689, label: "Desember" }
                ]
            }
        ]
    });
    chart.render();
};
