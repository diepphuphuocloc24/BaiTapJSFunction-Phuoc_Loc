// Gán biến khu vực ưu tiên
const doi_Tuong_1 = 2.5;
const doi_Tuong_2 = 1.5;
const doi_Tuong_3 = 1;

// Tính điểm ưu tiên khu vực
function calculate_Khu_Vuc(khu_Vuc) {
  let tong_Diem_Khu_Vuc = 0;
  let khu_Vuc_Uu_Tien = khu_Vuc;
  switch (khu_Vuc_Uu_Tien) {
    case "A":
      tong_Diem_Khu_Vuc = 2;
      break;
    case "B":
      tong_Diem_Khu_Vuc = 1;
      break;
    case "C":
      tong_Diem_Khu_Vuc = 0.5;
      break;
    case "X":
      tong_Diem_Khu_Vuc = 0;
      break;
    default:
      alert("Bạn nhập sai khu vực ưu tiên");
  }

  console.log("Điểm khu vực là = ", tong_Diem_Khu_Vuc);
  return tong_Diem_Khu_Vuc;
}

// Tính điểm ưu tiên đối tượng
function calculate_Doi_Tuong(doi_Tuong) {
  let tong_Diem_Doi_Tuong = 0;
  let Doi_Tuong_Uu_Tien = doi_Tuong;
  switch (Doi_Tuong_Uu_Tien) {
    case 1:
      tong_Diem_Doi_Tuong = 2.5;
      break;
    case 2:
      tong_Diem_Doi_Tuong = 1.5;
      break;
    case 3:
      tong_Diem_Doi_Tuong = 1;
      break;
    case 0:
      tong_Diem_Doi_Tuong = 0;
      break;
    default:
      alert("Bạn nhập sai đối tượng ưu tiên");
  }

  console.log("Điểm đối tượng là = ", tong_Diem_Doi_Tuong);
  return tong_Diem_Doi_Tuong;
}

// NÚT TRA ĐIỂM
function tra_Diem(event) {
  event.preventDefault();

  let nhap_Diem_Chuan = document.getElementById("txt-Diem_Chuan").value * 1;
  let nhap_Diem_Toan = document.getElementById("txt-Toan").value * 1;
  let nhap_Diem_Van = document.getElementById("txt-Van").value * 1;
  let nhap_Diem_Anh = document.getElementById("txt-Anh").value * 1;
  let nhap_Khu_Vuc = document.getElementById("txt-Khu-Vuc").value;
  let nhap_Doi_Tuong = document.getElementById("txt-Doi_Tuong").value * 1;

  let tong_Diem_Thi =
    nhap_Diem_Toan +
    nhap_Diem_Van +
    nhap_Diem_Anh +
    calculate_Khu_Vuc(nhap_Khu_Vuc) +
    calculate_Doi_Tuong(nhap_Doi_Tuong);

  console.log(tong_Diem_Thi);
  document.getElementById("show_Grade_Result").innerHTML = tong_Diem_Thi;

  if (tong_Diem_Thi >= nhap_Diem_Chuan) {
    document.getElementById("show_Grade_Result").innerHTML =
      tong_Diem_Thi + " điểm";
    document.getElementById("show_Final_Result").innerHTML = "Bạn đã đậu.";
  } else {
    document.getElementById("show_Grade_Result").innerHTML =
      tong_Diem_Thi + " điểm";
    document.getElementById("show_Final_Result").innerHTML = "Bạn đã rớt.";
  }
}
