// Gán biến đơn giá tiền điện
const elec_First_50 = 500;
const elec_Second_50 = 650;
const elec_Third_100 = 850;
const elec_Fourth_150 = 1100;
const elec_Remain = 1300;

// Công thức tính tiền điện
function calculate_Tien_Dien(so_kW) {
  let tong_Tien_Dien = 0;

  if (so_kW <= 50) {
    tong_Tien_Dien = so_kW * elec_First_50;
  } else if (so_kW <= 100) {
    tong_Tien_Dien = 50 * elec_First_50 + (so_kW - 50) * elec_Second_50;
  } else if (so_kW <= 200) {
    tong_Tien_Dien =
      50 * elec_First_50 + 50 * elec_Second_50 + (so_kW - 100) * elec_Third_100;
  } else if (so_kW <= 350) {
    tong_Tien_Dien =
      50 * elec_First_50 +
      50 * elec_Second_50 +
      100 * elec_Third_100 +
      (so_kW - 200) * elec_Fourth_150;
  } else if (so_kW > 350) {
    tong_Tien_Dien =
      50 * elec_First_50 +
      50 * elec_Second_50 +
      100 * elec_Third_100 +
      150 * elec_Fourth_150 +
      (so_kW - 350) * elec_Remain;
  } else {
    alert("Bạn chưa nhập số điện đã dùng");
  }

  console.log(tong_Tien_Dien);
  return tong_Tien_Dien;
}

// Bấm nút tính tiền
function tinh_Tien_Dien(event) {
  event.preventDefault();

  let nhap_So_Dien = document.getElementById("txt-kW").value * 1;
  console.log(nhap_So_Dien);
  document.getElementById("show_Elec_Result").innerHTML =
    calculate_Tien_Dien(nhap_So_Dien).toLocaleString();
}
