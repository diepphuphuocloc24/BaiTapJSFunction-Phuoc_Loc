// Gán biến thuế thu nhập cá nhân
let nhap_Thue_60 = 5;
let nhap_Thue_120 = 10;
let nhap_Thue_210 = 15;
let nhap_Thue_384 = 20;
let nhap_Thue_624 = 25;
let nhap_Thue_960 = 30;
let nhap_Thue_Over_960 = 35;

// Công thức tính thu nhập chịu thuế
function calculate_Thu_Nhap_Thue(tong_Thu_Nhap, so_Nguoi_Phu_Thuoc) {
  let thue_Thu_Nhap = tong_Thu_Nhap - 4 - so_Nguoi_Phu_Thuoc * 1.6;

  console.log(thue_Thu_Nhap);
  return thue_Thu_Nhap;
}

// Công thức tính thuế suất
function calculate_Thue_Suat(tong_Thu_Nhap) {
  let tong_Thue_Suat = 0;
  if (tong_Thu_Nhap <= 60) {
    tong_Thue_Suat = nhap_Thue_60;
  } else if (tong_Thu_Nhap > 60 && tong_Thu_Nhap <= 120) {
    tong_Thue_Suat = nhap_Thue_120;
  } else if (tong_Thu_Nhap > 120 && tong_Thu_Nhap <= 210) {
    tong_Thue_Suat = nhap_Thue_210;
  } else if (tong_Thu_Nhap > 210 && tong_Thu_Nhap <= 384) {
    tong_Thue_Suat = nhap_Thue_384;
  } else if (tong_Thu_Nhap > 384 && tong_Thu_Nhap <= 624) {
    tong_Thue_Suat = nhap_Thue_624;
  } else if (tong_Thu_Nhap > 624 && tong_Thu_Nhap <= 960) {
    tong_Thue_Suat = nhap_Thue_960;
  } else if (tong_Thu_Nhap > 960) {
    tong_Thue_Suat = nhap_Thue_Over_960;
  } else {
    alert("Bạn chưa nhập thu nhập");
  }

  console.log(tong_Thue_Suat);
  return tong_Thue_Suat;
}

// Bấm nút thuế thu nhập cá nhân
function tinh_Thue(event) {
  event.preventDefault();

  let nhap_Thu_Nhap = document.getElementById("txt-Thu_Nhap").value * 1;
  let nhap_So_Nguoi = document.getElementById("txt-People").value * 1;

  let tong_Thue_Thu_Nhap =
    (calculate_Thu_Nhap_Thue(nhap_Thu_Nhap, nhap_So_Nguoi) *
      calculate_Thue_Suat(nhap_Thu_Nhap)) /
    100;

  let xuat_Thue = (document.getElementById("show_Result").innerHTML =
    tong_Thue_Thu_Nhap);
}
