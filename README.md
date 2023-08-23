# CRUD App

- Create Read Update Delete
- Oluştur Oku Düzenle Sil

* Form içersinden kitap ismini al.
* - Eğerki kitap ismi girilmişse:
* - Ekle butonuna tıklanınca kitap ismiyle yeni bir obje oluştur
* - Eklenme Tarihi | Kitap İsmi | id | okunduMu
* - Oluşan objeyi kitaplatın tümünü tuttuğumuz state'e aktar
* - inputu temizle

* `books` state'inde tutulan kiatpları al ve ekrana bas
* - Eğer state boşsa "Henüz kitap eklenmedi " ekrana bas
* - Dizideki herbir kitap için ekrana `BookCard` bilşeni bas
* - `BookCard` 'a prop olarak ekrana basılacak kitap bilgilerini aktar

* Kitap Silme:
* - herhangi bir kitabın sil butonuna basıldığında fonk. çalıştır
* - fonksiyona silincek id 'sine gönder
* - bu fonksiyon ekran modal'ı açsın
* - ve modal'a slinecekID'yi gönder

* Okundu İşaretleme:
* - okundu butonuna tıklanınca fonk çalıştır.
* - bu fonksiyona kitabın değerlerini gönder
* - kitabın isRead değerini terne çevir
* - state'i güncelle

* Düzenleme:
* - Düzenle butonuna tıklanılıdğında fonk. çalışsın
* - Fonk. modal'ı açsın ve düzenlenicek elemanı state'e aktarsın
* - düzenlenicek elman modaldaki inputa gelsin (prop gönder)
* - input değiştiğinde düzenlenicek elmanın title'ını değiştir
* - vazgeç > modal'ı kapat
* - kaydet > düzenlenicek elemanı `books` state'ine aktarıcak fonksiyonu çalıştır
# CRUD
