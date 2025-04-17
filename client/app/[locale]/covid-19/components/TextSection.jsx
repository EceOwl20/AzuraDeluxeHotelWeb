import React from 'react'

const TextSection = () => {
  return (
    <div className='flex w-screen items-center justify-center my-[30px] md:my-[45px] lg:my-[60px]'>
      <div className='flex flex-col items-start justify-center w-[87.79%] md:w-[91.4%] lg:w-[76.8%] max-w-[1440px] text-start gap-4 lg:gap-8'>
        <h4 className='font-marcellus text-[28px] md:text-[32px] lg:text-[40px] text-lagoBlack2 w-full items-center text-center'>COVID-19</h4>
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray'>Azura Deluxe Resort&Spa Hotel ailesi olarak, önceliğimiz misafirlerimizin, çalışanlarımızın ve iş ortaklarımızın sağlığı ve güvenliğidir. Bu nedenle Sağlık Bakanlığımızın ve Dünya Sağlık Örgütünün yayınladıgı COVID-19 genelgelerini yakından takip ediyor ve uyguluyoruz.</p>
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray font-bold'>Hijyene verdiğimiz önem:</p>
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray'>Azura Deluxe Resort&Spa Hotel olarak, kuruluşumuzdan bugüne, tesislerimizin temizliği ve hijyeni birinci önceliğimiz olmuştur. COVID-19 virüsü sebebiyle, yerel ve uluslararası uzmanların ve yetkililerin tavsiyeleri doğrultusunda, yeni önlemler aldığımızı özellikle belirtmek isteriz. Tavsiye edilen talimatlara uyularak, tesislerimizde günlük hijyen çalışmaları gerçekleşmektedir. Sizi en kısa zamanda, tekrar tesislerimizde ağırlamaya hazırlanırken, Azura Deluxe Resort&Spa Hotel’in aldığı aksiyonlar aşağıdaki gibidir:</p>
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray'> <span className='font-bold'>Çalışanlarımızın sağlığı ve bilgilendirilmesi:</span> Başarılı bir temizlik programı için personelimizin kendi sağlıkları, güvenlikleri ve eğitimine çok önem vermekteyiz. Odak noktalarımızdan bazıları:</p>
        <ul className='marker:text-[8px] pl-4 list-disc text-lagoGray font-jost text-[12px] lg:text-[14px]'>
            <li> <span className='font-bold'>El Hijyeni:</span> Nizami ve düzgün el temizliği, virüsün yayılmasına karşı en etkili eylemlerden biridir. Günlük toplantılarımızda çalışanlarımızın el temizliği konusunda oluşturduğumuz prosedürler çerçevesinde takibimizi yapmaktayız. Bu toplantılar çalışanlarımızın ve müşterilerimizin sağlığı açısından büyük önem taşımaktadır.</li>
            <li> <span className='font-bold'>Sürekli Eğitim:</span> Yeni eklenen hijyen ve temizlik protokollerimizin yanı sıra, otel çalışanlarımız COVID-19 farkındalık eğitimlerine tabi tutulmaktadır.</li>
            <li> <span className='font-bold'>Sürekli Bilgi Akışı:</span> Ekiplerimiz sürekli iletişimde kalarak ve bilgi paylaşımı sağlayarak son durumlar hakkında bilgi sahibi olmaktadır.</li>
        </ul>
        
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray'>Temizlik Ürünleri ve Protokolleri:</p> 
        <ul className='marker:text-[8px] pl-4 list-disc text-lagoGray font-jost text-[12px] lg:text-[14px]'>
            <li> <span className='font-bold'>Otel Odaları:</span> Misafirlerimiz ayrıldıktan sonra odalarımız her zaman uygun protokollere göre temizlenip dezenfekte edilmektedir. Mevcut durumla birlikte konuklarımızın güvenliğini sağlamak için ek protokoller eklenmiş ve uygulanmaktadır.</li>
            <li> <span className='font-bold'>Ortak Alanlar:</span> Tesislerimizdeki temizlik birimlerimiz, ön büro, asansörler ve asansör düğmeleri, kapı kolları, umumi banyolar, çocuk oyun alanları ve oda anahtarları gibi yüksek temas noktalarına odaklanarak, ortak alanlarda temizleme ve dezenfeksiyon sıklığını arttırmışlardır.</li>
            <li> <span className='font-bold'>Çalışma Alanları:</span> Personelimizin çalıştığı bölümlerde, temizlik sıklığını arttırmakta ve ön girişler, soyunma odaları, çamaşır odaları ve personel ofisleri gibi yüksek temas alanlarına özellikle dikkat etmektedirler.</li>
        </ul>
        
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray'>Güncel bilgiler için Dünya Sağlık Örgütü’nün önerilerine bu linkten ulaşabilir veya yerel sağlık yetkilileriyle temasa geçebilirsiniz.</p>
        <p className='text-[12px] lg:text-[14px] font-jost leading-normal text-lagoGray'>Önümüzdeki günlerde alacağımız yeni önlemler ve gelişmelerle ilgili olarak sizleri hızlıca bilgilendireceğiz. Size ve yakınlarınıza sağlıklı günler diler, Azura Deluxe Resort&Spa Hotel’e bir sonraki ziyaretinizi Azura Deluxe Resort&Spa Hotel ailesi olarak dört gözle beklediğimizi bilmenizi isteriz.</p>
 
      </div>
    </div>
  )
}

export default TextSection
