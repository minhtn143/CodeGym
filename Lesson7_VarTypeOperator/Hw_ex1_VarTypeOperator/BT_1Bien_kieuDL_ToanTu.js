function TinhTB() {
    let Ly,Hoa,Sinh;
    Ly = document.getElementById('VatLy');
    Hoa = document.getElementById('HoaHoc');
    Sinh = document.getElementById('SinhHoc');
    L = parseFloat(Ly.value);
    H = parseFloat(Hoa.value);
    S = parseFloat(Sinh.value);
    let avg = (L + H + S)/3;
    document.getElementById('TBinh').value = avg.toFixed(2);
}
function TinhTong() {
    let Ly,Hoa,Sinh;
    Ly = document.getElementById('VatLy');
    Hoa = document.getElementById('HoaHoc');
    Sinh = document.getElementById('SinhHoc');
    L = parseFloat(Ly.value);
    H = parseFloat(Hoa.value);
    S = parseFloat(Sinh.value);
    let sum = L + H + S;
    document.getElementById('Tong').value = sum.toFixed(2);
}
function ChuyenDoi() {
    let DoC;
    DoC = document.getElementById('NhapC');
    DoF =1.8 * parseFloat(DoC.value) + 32;
    document.getElementById('XuatF').value = DoF.toFixed(2);
}
function TinhCvDt() {
    let BanKinh;
    BanKinh = document.getElementById('nBanKinh');
    ChuVi = 3.14 * 2 * parseFloat(BanKinh.value);
    DienTich = 3.14 * (parseFloat(BanKinh.value))**2;
    document.getElementById('xChuVi').value = ChuVi.toFixed(2);
    document.getElementById('xDienTich').value = DienTich.toFixed(2);
}
