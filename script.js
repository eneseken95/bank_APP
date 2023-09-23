function hesaplaKredi() 
{
    const krediTutar = parseFloat(document.getElementById("kredi-tutar").value);
    const faizOrani = parseFloat(document.getElementById("faiz-orani").value);
    const vadeYili = parseFloat(document.getElementById("vade-yili").value);

    if (!krediTutar || !faizOrani || !vadeYili) 
    {
        alert("Lütfen geçerli bir kredi tutarı, faiz oranı ve vade yılı girin.");
        return;
    }

    const aylikFaizOrani = faizOrani / 12 / 100;
    const kredi = krediTutar;
    const faiz = krediTutar * aylikFaizOrani * 12 * vadeYili;
    const toplamOdeme = kredi + faiz;

    const formattedKredi = kredi.toLocaleString('tr-TR');
    const formattedFaiz = faiz.toLocaleString('tr-TR');
    const formattedToplamOdeme = toplamOdeme.toLocaleString('tr-TR');

    document.getElementById("kredi-sonuc").textContent = `Çekilen Kredi Tutarı: ${formattedKredi} TL`;
    document.getElementById("faiz-sonuc").textContent = `Ödenecek Toplam Faiz: ${formattedFaiz} TL`;
    document.getElementById("toplam-sonuc").textContent = `Toplam Ödemeniz Gereken Miktar: ${formattedToplamOdeme} TL`;
    document.getElementById("sonuc").classList.remove("hidden");
}
