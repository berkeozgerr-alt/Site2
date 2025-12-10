// ==================================
// JAVASCRIPT (ETKİLEŞİM) KODLARI
// ==================================

/**
 * toggleMenu: Mobil menüyü açıp kapatmaktan sorumludur.
 * HTML'deki 'menu-button' elemanının 'onclick' özelliği tarafından çağrılır.
 */
function toggleMenu() {
    // 1. DOM'dan (Belge Nesne Modeli) 'anaMenu' ID'li navigasyon elementini seçeriz.
    var menu = document.getElementById("anaMenu");
    
    // 2. Elementin sınıf listesini kontrol ederiz ve 'active' sınıfını değiştiririz (toggle).
    // toggle() metodu, sınıf yoksa ekler, varsa kaldırır. Bu, if/else yapısından daha kısadır.
    menu.classList.toggle("active");
    
    // Açıklama: CSS'te .active sınıfı, menüyü görünür yapmak için display: block kuralını tetikler.
}

// İpucu: Bu kodu, sayfa yüklendikten sonra çalışması için </body>'den hemen önce koyduk.

// ==================================
// JAVASCRIPT KODLARI BİTİŞİ
// ==================================
