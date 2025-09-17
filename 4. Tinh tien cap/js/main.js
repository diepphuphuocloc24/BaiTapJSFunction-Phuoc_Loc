// Gán biến mức giá tính tiền cáp Nhà dân"
const phi_Xu_Ly_Hoa_Don_1 = 4.5;
const phi_Dich_Vu_1 = 20.5;
const thue_Kenh_Cao_Cap_1 = 7.5;

// Gán biến mức giá tính tiền cáp Nhà dân"
const phi_Xu_Ly_Hoa_Don_2 = 15;
const phi_Dich_Vu_2_10 = 75;
const phi_Dich_Vu_2_over = 5;
const thue_Kenh_Cao_Cap_2 = 50;

// Chọn loại nhà
function select_Loai_Nha(chon_Nha_Dan, chon_Doanh_Nghiep) {
  let loai_Nha = "";
  if (chon_Nha_Dan.checked) {
    loai_Nha = "NhaDan";
  } else if (chon_Doanh_Nghiep.checked) {
    loai_Nha = "DoanhNghiep";
  } else {
    alert("Bạn chưa chọn loại khách hàng");
  }
  return loai_Nha;
}

// Phần input của Số kết nối không cho nhập khi chọn Nhà dân
function so_Ket_Noi_Disabled(radioId) {
  const chon_Nha_Dan = document.getElementById("rd-nhaDan");
  const chon_Doanh_Nghiep = document.getElementById("rd-doanhNghiep");
  const so_Ket_Noi = document.getElementById("so_Ket_Noi");

  if (chon_Nha_Dan.checked) {
    so_Ket_Noi.disabled = true;
  } else if (chon_Doanh_Nghiep.checked) {
    so_Ket_Noi.disabled = false;
  }
}

// Công thức tính tiền cáp Nhà dân
function calculate_Cap_Price_1(
  phi_Xu_Ly_Hoa_Don_1,
  phi_Dich_Vu_1,
  thue_Kenh_Cao_Cap_1,
  kenh_Cao_Cap
) {
  let tien_Cap_Nha_Dan =
    phi_Xu_Ly_Hoa_Don_1 + phi_Dich_Vu_1 + thue_Kenh_Cao_Cap_1 * kenh_Cao_Cap;

  return tien_Cap_Nha_Dan;
}

// Công thức tính tiền cáp Doanh nghiệp
function calculate_Cap_Price_2(
  phi_Xu_Ly_Hoa_Don_2,
  phi_Dich_Vu_2_10,
  phi_Dich_Vu_2_over,
  thue_Kenh_Cao_Cap_2,
  kenh_Cao_Cap,
  so_Ket_Noi
) {
  let tien_Cap_Doanh_Nghiep = 0
  if (so_Ket_Noi <= 10) {
    tien_Cap_Doanh_Nghiep = phi_Xu_Ly_Hoa_Don_2 +
      phi_Dich_Vu_2_10 +
      thue_Kenh_Cao_Cap_2 * kenh_Cao_Cap;
  } else if (so_Ket_Noi > 10) {
    tien_Cap_Doanh_Nghiep = phi_Xu_Ly_Hoa_Don_2 +
      phi_Dich_Vu_2_10 + (so_Ket_Noi - 10) * phi_Dich_Vu_2_over +
      thue_Kenh_Cao_Cap_2 * kenh_Cao_Cap;
  }

  return tien_Cap_Doanh_Nghiep;
}

// // Khi bấm nút
function tinh_Hoa_Don(event) {
  event.preventDefault();

  let chon_Nha_Dan = document.getElementById("rd-nhaDan");
  let chon_Doanh_Nghiep = document.getElementById("rd-doanhNghiep");

  let so_Ket_Noi = document.getElementById("so_Ket_Noi").value * 1;
  let kenh_Cao_Cap = document.getElementById("kenh_Cao_Cap").value * 1;

  let loai_Nha = select_Loai_Nha(chon_Nha_Dan, chon_Doanh_Nghiep);

  let total_Cap_Price = 0

  switch (loai_Nha) {
    case "NhaDan":
      total_Cap_Price = calculate_Cap_Price_1(
        phi_Xu_Ly_Hoa_Don_1,
        phi_Dich_Vu_1,
        thue_Kenh_Cao_Cap_1,
        kenh_Cao_Cap
      );
      break
    case "DoanhNghiep":
      total_Cap_Price = calculate_Cap_Price_2(
        phi_Xu_Ly_Hoa_Don_2,
        phi_Dich_Vu_2_10,
        phi_Dich_Vu_2_over,
        thue_Kenh_Cao_Cap_2,
        kenh_Cao_Cap,
        so_Ket_Noi
      )
      break
    default:
      alert("Bạn chưa chọn doanh nghiệp")
  }
  console.log(total_Cap_Price);
  document.getElementById("show_ketQua").innerHTML = "Thành tiền cáp là: $" + total_Cap_Price

}
