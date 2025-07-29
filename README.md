# MiniPlan - Günlük Plan + AI Motive Geri Bildirim

🎯 **MiniPlan**, kullanıcıların her sabah 3 hedef belirleyip, gün içinde bildirim alarak, akşam günü kapatıp AI'dan motive edici geri bildirim aldığı modern bir Flutter uygulamasıdır.

## 🌟 Özellikler

- **Günlük Hedef Belirleme**: Her sabah 3 hedef belirleyin
- **Akıllı Bildirimler**: Sabah (8:00), öğlen (12:00), akşam (20:00) hatırlatmaları
- **Hedef Takibi**: Hedeflerinizi kolayca işaretleyin ve ilerlemenizi görün
- **AI Geri Bildirimi**: Gün sonunda OpenAI ile motive edici değerlendirme
- **Modern UI/UX**: Sade ve kullanıcı dostu arayüz
- **Firebase Entegrasyonu**: Verilerinizi güvenle saklayın

## 🛠️ Teknolojiler

- **Flutter**: Cross-platform mobil uygulama geliştirme
- **Firebase**: Veri saklama ve kullanıcı yönetimi
  - Firestore: Veritabanı
  - Authentication: Kullanıcı kimlik doğrulama
- **OpenAI API**: AI destekli geri bildirim
- **Local Notifications**: Yerel bildirimler
- **Provider**: State management

## 📱 Ekran Görüntüleri

### Ana Ekran
- Günaydın mesajı ve hedef belirleme butonu
- Günlük ilerleme takibi
- Tamamlanan günler için AI geri bildirimi

### Hedef Belirleme
- 3 hedef için modern form tasarımı
- Başlık ve açıklama alanları
- Validasyon ve hata kontrolü

### Hedef Takibi
- Görsel ilerleme çubuğu
- Hedef tamamlama/geri alma
- Günü tamamlama özelliği

### AI Geri Bildirimi
- Kişiselleştirilmiş motivasyon mesajları
- Günlük istatistikler
- Paylaşım özelliği

## 🚀 Kurulum

### Gereksinimler
- Flutter SDK (3.0.0 veya üzeri)
- Dart SDK
- Android Studio / VS Code
- Firebase hesabı
- OpenAI API anahtarı

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone <repository-url>
   cd miniplan
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   flutter pub get
   ```

3. **Firebase kurulumu**
   - Firebase Console'da yeni proje oluşturun
   - Android ve iOS uygulamalarını ekleyin
   - `google-services.json` ve `GoogleService-Info.plist` dosyalarını indirin
   - Android: `android/app/` klasörüne yerleştirin
   - iOS: `ios/Runner/` klasörüne yerleştirin

4. **OpenAI API anahtarını ayarlayın**
   - `lib/services/ai_service.dart` dosyasında `_apiKey` değişkenini güncelleyin
   ```dart
   static const String _apiKey = 'YOUR_OPENAI_API_KEY';
   ```

5. **Uygulamayı çalıştırın**
   ```bash
   flutter run
   ```

## 📋 Kullanım

1. **İlk Açılış**: Uygulama otomatik olarak anonim giriş yapar
2. **Hedef Belirleme**: "Hedeflerimi Belirle" butonuna tıklayın
3. **3 Hedef Girin**: Her hedef için başlık ve açıklama ekleyin
4. **Günlük Takip**: Hedeflerinizi tamamladıkça işaretleyin
5. **Günü Tamamla**: Akşam "Günü Tamamla" butonuna tıklayın
6. **AI Geri Bildirimi**: Kişiselleştirilmiş motivasyon mesajınızı okuyun

## 🔧 Konfigürasyon

### Bildirim Zamanları
`lib/services/notification_service.dart` dosyasında bildirim zamanlarını değiştirebilirsiniz:
```dart
// Sabah 8:00
await _scheduleNotification(hour: 8, minute: 0);
// Öğlen 12:00  
await _scheduleNotification(hour: 12, minute: 0);
// Akşam 20:00
await _scheduleNotification(hour: 20, minute: 0);
```

### AI Prompt Özelleştirme
`lib/services/ai_service.dart` dosyasında AI prompt'unu özelleştirebilirsiniz.

## 📊 Veri Yapısı

### DailyPlan Model
```dart
{
  id: String,
  date: DateTime,
  goals: List<Goal>,
  aiFeedback: String?,
  isCompleted: bool,
  createdAt: DateTime,
  completedAt: DateTime?
}
```

### Goal Model
```dart
{
  id: String,
  title: String,
  description: String,
  isCompleted: bool,
  createdAt: DateTime,
  completedAt: DateTime?
}
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Proje Sahibi**: [Adınız]
- **Email**: [email@example.com]
- **GitHub**: [github.com/username]

## 🙏 Teşekkürler

- Flutter ekibine harika framework için
- Firebase ekibine backend çözümleri için
- OpenAI ekibine AI API'si için
- Tüm açık kaynak topluluğuna

---

**MiniPlan** ile günlük hedeflerinizi belirleyin, takip edin ve AI destekli motivasyonla başarıya ulaşın! 🎯✨ 

## 📄 VS Code ile MiniPlan'ı Açalım:

### 1. VS Code'u Açın
- VS Code uygulamasını başlatın

### 2. Projeyi Açın
- **File** → **Open Folder** (veya **Ctrl+K, Ctrl+O**)
- **`miniplan_new`** klasörünü seçin
- **"Select Folder"** butonuna tıklayın

### 3. Flutter ve Dart Extension'larını Yükleyin
- **Ctrl+Shift+X** tuşlarına basın (Extensions sekmesi)
- Arama kutusuna **"Flutter"** yazın
- **"Flutter"** extension'ını yükleyin (Dart otomatik olarak yüklenecek)

### 4. Flutter Packages'ları Yükleyin
- **Ctrl+Shift+P** tuşlarına basın (Command Palette)
- **"Flutter: Get Packages"** yazın ve seçin
- Veya terminal'de: `flutter pub get`

### 5. Projeyi Çalıştırın
- **F5** tuşuna basın (Debug)
- Veya **Ctrl+F5** (Run without debugging)
- Veya **Ctrl+Shift+P** → **"Flutter: Run"**

### 6. Cihaz Seçimi
- Alt kısımda cihaz seçimi çıkacak
- **Chrome (web)** veya **Android Emulator** seçin
- Eğer Android cihazınız varsa onu da seçebilirsiniz

## 📄 VS Code'da Proje Yapısı:

```
miniplan_new/
├── lib/
│   ├── main.dart              # Ana uygulama dosyası
│   ├── models/                # Veri modelleri
│   ├── providers/             # State management
│   ├── services/              # API ve bildirim servisleri
│   └── screens/               # Uygulama ekranları
├── pubspec.yaml              # Bağımlılıklar
└── README.md                 # Proje dokümantasyonu
```

## 📄 VS Code'da Debugging:

1. **Breakpoint koymak için:** Satır numarasının yanına tıklayın
2. **Debug Console:** Alt kısımda debug mesajlarını görün
3. **Hot Reload:** **Ctrl+S** ile değişiklikleri kaydedin

## 🔧 Eğer Hata Alırsanız:

1. **Terminal'de:**
   ```bash
   flutter doctor
   flutter clean
   flutter pub get
   ```

2. **VS Code'da:**
   - **Ctrl+Shift+P** → **"Flutter: Clean"
   - **Ctrl+Shift+P** → **"Flutter: Get Packages"**

VS Code'u açtınız mı? Hangi adımda yardıma ihtiyacınız var? 

### **6. Basit Web Server Başlatın**
VS Code Terminal'inde:
```bash
<code_block_to_apply_changes_from>
cd miniplan_new
python -m http.server 8080
```

Veya:
```bash
npx serve -s . -p 8080
```

### **7. Chrome'da Açın**
- Chrome'u açın
- `http://localhost:8080` adresine gidin

## 🎯 **Şu Anda Ne Yapmalısınız:**

1. **VS Code'da F5'e basın** (Debug başlatmak için)
2. **Veya terminal'de Flutter komutlarını çalıştırın**
3. **Veya basit web server başlatın**

**Hangi yöntemi denemek istiyorsunuz?** Flutter kurulu mu yoksa basit web server mı başlatalım? 