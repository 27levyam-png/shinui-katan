# שינוי קטן – פרויקט אנדרואיד (Capacitor)

האפליקציה עובדת לגמרי בלי אינטרנט, כולל מסך פתיחה של 2 שניות ושלוש שפות (עברית, English, Français).

## בניית APK להתקנה (בענן, חינם)
1. פתח חשבון ב-github.com ולחץ New repository (למשל בשם shinui-katan).
2. העלה את כל תוכן התיקייה הזו (Add file ← Upload files).
   * אם התיקייה `.github` לא עלתה: Add file ← Create new file, כתוב `.github/workflows/build-apk.yml` והדבק את תוכן הקובץ מהתיקייה `github-workflows-copy`.
3. לשונית Actions ← Build APK ← Run workflow.
4. אחרי כמה דקות לחץ על ההרצה, ובתחתית (Artifacts) הורד `shinui-katan-apk`. בפנים `app-debug.apk` – מתקינים בטלפון.

## שינוי שם החבילה
ב-`capacitor.config.json` השדה `appId` (למשל com.yourname.shinuikatan). חובה לשנות לפני פרסום בגוגל פליי, והוא לא ניתן לשינוי אחר כך.

## קובץ לגוגל פליי (AAB חתום)
1. ליצור מפתח (במחשב עם Java): `keytool -genkeypair -v -keystore release.jks -alias upload -keyalg RSA -keysize 2048 -validity 10000`
2. לשמור את הקובץ והסיסמאות במקום בטוח – בלעדיהם אי אפשר לעדכן.
3. להמיר ל-base64 (`base64 release.jks`) ולהוסיף ב-GitHub: Settings ← Secrets and variables ← Actions ← 4 סודות: `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`.
4. Actions ← Build signed AAB ← Run workflow. מורידים את `app-release-signed.aab` ומעלים ל-Play Console.

## שינויים באפליקציה
את הקוד עורכים ב-`www/index.html`. אחרי שמירה ב-GitHub מתבצעת בנייה חדשה אוטומטית.
