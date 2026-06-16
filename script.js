let revealObserver = null; // معرّف مبكرًا لتجنّب منطقة الموت الزمني (TDZ)
let currentLang = 'ar';

/* ============================================================
   الترجمات — عربي / إنجليزي / سويدي
   ============================================================ */
const I18N = {
  ar:{
    dir:'rtl',
    brand_name:"خياطة الملابس", brand_sub:"Couture & Tailoring",
    nav_home:"الرئيسية", nav_services:"الخدمات", nav_fabrics:"الأقمشة", nav_gallery:"معرض الأعمال",
    nav_testimonials:"آراء العملاء", nav_booking:"احجز الآن", nav_contact:"تواصل معنا", nav_cta:"طلب تفصيل",
    hero_eyebrow:"منذ عام ١٩٩٨ — حِرفة تتوارثها الأجيال",
    hero_title1:"خياطة وتفصيل", hero_title2:"بأعلى معايير الجودة",
    hero_sub:"نصنع لك قطعةً تُروى، نختار أرقى الأقمشة ونفصّلها على مقاسك بدقّةٍ وذوقٍ رفيع لتعكس شخصيتك في كل تفصيلة.",
    hero_cta1:"احجز موعدك الآن", hero_cta2:"شاهد أعمالنا",
    stat1_num:"+٢٥", stat1_label:"عامًا من الخبرة", stat2_num:"+٨٠٠٠", stat2_label:"قطعة مُفصّلة", stat3_num:"٪٩٨", stat3_label:"رضا العملاء",
    feat1_t:"قَصّ يدوي دقيق", feat1_d:"قياسات مأخوذة بعناية وقَصّ احترافي لكل قطعة.",
    feat2_t:"أقمشة منتقاة", feat2_d:"تشكيلة فاخرة من أجود الأقمشة العالمية.",
    feat3_t:"تسليم في الموعد", feat3_d:"التزام تام بمواعيد التسليم المتفق عليها.",
    feat4_t:"ضمان الجودة", feat4_d:"تعديلات مجانية حتى تصل إلى المقاس المثالي.",
    services_kicker:"خدماتنا", services_title:"خدمات تفصيل تليق بذوقك",
    services_sub:"من البدلة الرسمية إلى الفستان المسائي، نوفّر لك تجربة خياطة متكاملة بأيدٍ خبيرة.",
    svc1_t:"تفصيل رجالي", svc1_d:"بدلات، قمصان، وأطقم رسمية مُفصّلة على المقاس بأناقة كلاسيكية وعصرية.",
    svc2_t:"تفصيل نسائي", svc2_d:"فساتين سهرة وعبايات وأزياء يومية بتصاميم راقية تبرز جمالك.",
    svc3_t:"تعديل الملابس", svc3_d:"تضييق، تطويل، وتعديل القصّات لتعيد لملابسك مقاسها المثالي.",
    svc4_t:"خياطة حسب الطلب", svc4_d:"صمّم قطعتك الخاصة، ارفع تصميمك ونحوّله إلى واقعٍ يُلبَس.",
    svc_link:"اطلب الآن ←",
    fabrics_kicker:"تشكيلتنا", fabrics_title:"أنواع الأقمشة",
    fabrics_sub:"اختر من بين أجود الخامات، مع إمكانية التصفية حسب النوع والاستخدام والموسم.",
    filter_type:"النوع:", filter_use:"الاستخدام:", filter_season:"الموسم:",
    f_all:"الكل", f_natural:"طبيعي", f_synthetic:"صناعي",
    f_formal:"رسمي", f_daily:"يومي", f_occasions:"مناسبات",
    f_summer:"صيفي", f_winter:"شتوي", f_allseason:"لكل المواسم",
    no_results:"لا توجد أقمشة مطابقة لاختيارك.",
    gallery_kicker:"إبداعاتنا", gallery_title:"معرض الأعمال", gallery_sub:"نماذج من التصاميم والقطع التي نفّذناها بأيدٍ حِرَفية.",
    testi_kicker:"قالوا عنّا", testi_title:"آراء عملائنا", testi_sub:"ثقة نعتزّ بها وتدفعنا للأفضل دائمًا.",
    booking_kicker:"احجز الآن", booking_title:"اطلب تفصيلك الخاص",
    booking_sub:"املأ النموذج وارفق صورة التصميم المطلوب، وسيتواصل معك فريقنا لتأكيد التفاصيل والموعد.",
    booking_pt1:"✓ استشارة مجانية لاختيار القماش والقَصّة", booking_pt2:"✓ أخذ المقاسات في الأتيليه أو منزلك", booking_pt3:"✓ متابعة كل مرحلة حتى التسليم",
    form_name:"الاسم الكامل", form_name_ph:"اكتب اسمك", form_phone:"رقم الجوال",
    form_service:"نوع الخدمة", form_service_ph:"اختر الخدمة",
    opt_men:"تفصيل رجالي", opt_women:"تفصيل نسائي", opt_alter:"تعديل الملابس", opt_custom:"خياطة حسب الطلب",
    form_date:"الموعد المفضّل", form_notes:"تفاصيل الطلب", form_notes_ph:"صف القطعة، القماش المفضّل، أي ملاحظات...",
    form_upload_label:"صورة التصميم المطلوب", upload_text:"اسحب الصورة هنا أو اضغط للرفع", upload_hint:"PNG · JPG حتى ٥MB",
    form_submit:"إرسال الطلب", form_success:"✓ تم استلام طلبك بنجاح، سنتواصل معك قريبًا.",
    contact_kicker:"تواصل معنا", contact_title:"زورونا أو راسلونا",
    contact_addr:"الرياض، حي العليا، طريق الملك فهد", contact_hours:"السبت – الخميس: ٩ ص – ١٠ م",
    footer_about:"حِرفة الخياطة الراقية، نصنع لكم قطعًا تجمع الأصالة والعصرية بأعلى معايير الجودة.",
    footer_links:"روابط سريعة", footer_contact:"تواصل", footer_addr_link:"العنوان والخريطة",
    footer_copy:"© ٢٠٢٦ خياطة الملابس — جميع الحقوق محفوظة.",
  },
  en:{
    dir:'ltr',
    brand_name:"Clothing Tailoring", brand_sub:"Couture & Tailoring",
    nav_home:"Home", nav_services:"Services", nav_fabrics:"Fabrics", nav_gallery:"Gallery",
    nav_testimonials:"Testimonials", nav_booking:"Book Now", nav_contact:"Contact", nav_cta:"Order Now",
    hero_eyebrow:"Since 1998 — a craft passed down through generations",
    hero_title1:"Tailoring & Bespoke", hero_title2:"at the Highest Standards of Quality",
    hero_sub:"We craft a garment with a story — choosing the finest fabrics and tailoring them to your measurements with precision and refined taste to reflect your personality in every detail.",
    hero_cta1:"Book an Appointment", hero_cta2:"View Our Work",
    stat1_num:"+25", stat1_label:"Years of experience", stat2_num:"+8000", stat2_label:"Garments tailored", stat3_num:"98%", stat3_label:"Client satisfaction",
    feat1_t:"Precise Hand Cutting", feat1_d:"Careful measurements and professional cutting for every piece.",
    feat2_t:"Selected Fabrics", feat2_d:"A luxurious selection of the world's finest fabrics.",
    feat3_t:"On-Time Delivery", feat3_d:"Full commitment to agreed delivery dates.",
    feat4_t:"Quality Guarantee", feat4_d:"Free alterations until the fit is perfect.",
    services_kicker:"Our Services", services_title:"Tailoring Worthy of Your Taste",
    services_sub:"From the formal suit to the evening gown, we offer a complete tailoring experience by expert hands.",
    svc1_t:"Men's Tailoring", svc1_d:"Suits, shirts and formal sets tailored to measure with classic and modern elegance.",
    svc2_t:"Women's Tailoring", svc2_d:"Evening dresses, abayas and everyday wear in refined designs that highlight your beauty.",
    svc3_t:"Alterations", svc3_d:"Taking in, lengthening and reshaping to restore the perfect fit to your clothes.",
    svc4_t:"Custom Made", svc4_d:"Design your own piece — upload your design and we turn it into something wearable.",
    svc_link:"Order Now →",
    fabrics_kicker:"Our Collection", fabrics_title:"Types of Fabrics",
    fabrics_sub:"Choose from the finest materials, with filtering by type, use and season.",
    filter_type:"Type:", filter_use:"Use:", filter_season:"Season:",
    f_all:"All", f_natural:"Natural", f_synthetic:"Synthetic",
    f_formal:"Formal", f_daily:"Daily", f_occasions:"Occasions",
    f_summer:"Summer", f_winter:"Winter", f_allseason:"All seasons",
    no_results:"No fabrics match your selection.",
    gallery_kicker:"Our Creations", gallery_title:"Gallery", gallery_sub:"Samples of the designs and pieces we have crafted by hand.",
    testi_kicker:"They Said About Us", testi_title:"Client Testimonials", testi_sub:"Trust we cherish and that always drives us to do better.",
    booking_kicker:"Book Now", booking_title:"Request Your Custom Tailoring",
    booking_sub:"Fill in the form and attach an image of the desired design, and our team will contact you to confirm details and the appointment.",
    booking_pt1:"✓ Free consultation to choose fabric and cut", booking_pt2:"✓ Measurements at the atelier or your home", booking_pt3:"✓ Follow-up at every stage until delivery",
    form_name:"Full Name", form_name_ph:"Enter your name", form_phone:"Phone Number",
    form_service:"Service Type", form_service_ph:"Choose a service",
    opt_men:"Men's Tailoring", opt_women:"Women's Tailoring", opt_alter:"Alterations", opt_custom:"Custom Made",
    form_date:"Preferred Date", form_notes:"Order Details", form_notes_ph:"Describe the piece, preferred fabric, any notes...",
    form_upload_label:"Image of the Desired Design", upload_text:"Drag the image here or click to upload", upload_hint:"PNG · JPG up to 5MB",
    form_submit:"Send Request", form_success:"✓ Your request has been received, we will contact you soon.",
    contact_kicker:"Contact Us", contact_title:"Visit or Message Us",
    contact_addr:"Riyadh, Al-Olaya District, King Fahd Road", contact_hours:"Saturday – Thursday: 9 AM – 10 PM",
    footer_about:"The craft of fine tailoring — we create pieces that blend heritage and modernity at the highest standards of quality.",
    footer_links:"Quick Links", footer_contact:"Contact", footer_addr_link:"Address & Map",
    footer_copy:"© 2026 Clothing Tailoring — All rights reserved.",
  },
  sv:{
    dir:'ltr',
    brand_name:"Klädsömnad", brand_sub:"Couture & Skrädderi",
    nav_home:"Hem", nav_services:"Tjänster", nav_fabrics:"Tyger", nav_gallery:"Galleri",
    nav_testimonials:"Omdömen", nav_booking:"Boka nu", nav_contact:"Kontakt", nav_cta:"Beställ",
    hero_eyebrow:"Sedan 1998 — ett hantverk som ärvts genom generationer",
    hero_title1:"Skrädderi & måttsytt", hero_title2:"med högsta kvalitetsstandard",
    hero_sub:"Vi skapar ett plagg med en historia — vi väljer de finaste tygerna och syr dem efter dina mått med precision och förfinad smak för att spegla din personlighet i varje detalj.",
    hero_cta1:"Boka en tid", hero_cta2:"Se våra arbeten",
    stat1_num:"+25", stat1_label:"Års erfarenhet", stat2_num:"+8000", stat2_label:"Sydda plagg", stat3_num:"98%", stat3_label:"Nöjda kunder",
    feat1_t:"Exakt handklippning", feat1_d:"Noggranna mått och professionell klippning för varje plagg.",
    feat2_t:"Utvalda tyger", feat2_d:"Ett lyxigt urval av världens finaste tyger.",
    feat3_t:"Leverans i tid", feat3_d:"Full respekt för överenskomna leveransdatum.",
    feat4_t:"Kvalitetsgaranti", feat4_d:"Gratis ändringar tills passformen är perfekt.",
    services_kicker:"Våra tjänster", services_title:"Skrädderi värdigt din smak",
    services_sub:"Från den formella kostymen till aftonklänningen erbjuder vi en komplett skrädderiupplevelse av experthänder.",
    svc1_t:"Herrskrädderi", svc1_d:"Kostymer, skjortor och formella set sydda efter mått med klassisk och modern elegans.",
    svc2_t:"Damskrädderi", svc2_d:"Aftonklänningar, abayor och vardagsplagg i förfinade design som framhäver din skönhet.",
    svc3_t:"Ändringar", svc3_d:"Insläppning, förlängning och omformning för att återställa den perfekta passformen.",
    svc4_t:"Måttsytt", svc4_d:"Designa ditt eget plagg — ladda upp din design så förvandlar vi den till något bärbart.",
    svc_link:"Beställ nu →",
    fabrics_kicker:"Vår kollektion", fabrics_title:"Typer av tyger",
    fabrics_sub:"Välj bland de finaste materialen, med filtrering efter typ, användning och säsong.",
    filter_type:"Typ:", filter_use:"Användning:", filter_season:"Säsong:",
    f_all:"Alla", f_natural:"Naturligt", f_synthetic:"Syntetiskt",
    f_formal:"Formellt", f_daily:"Vardag", f_occasions:"Tillfällen",
    f_summer:"Sommar", f_winter:"Vinter", f_allseason:"Alla säsonger",
    no_results:"Inga tyger matchar ditt val.",
    gallery_kicker:"Våra skapelser", gallery_title:"Galleri", gallery_sub:"Exempel på design och plagg vi har skapat för hand.",
    testi_kicker:"De sa om oss", testi_title:"Kundomdömen", testi_sub:"Förtroende vi värnar om och som alltid driver oss att bli bättre.",
    booking_kicker:"Boka nu", booking_title:"Beställ ditt måttsydda plagg",
    booking_sub:"Fyll i formuläret och bifoga en bild på önskad design, så kontaktar vårt team dig för att bekräfta detaljer och tid.",
    booking_pt1:"✓ Gratis rådgivning för val av tyg och snitt", booking_pt2:"✓ Måttagning i ateljén eller hemma hos dig", booking_pt3:"✓ Uppföljning i varje steg fram till leverans",
    form_name:"Fullständigt namn", form_name_ph:"Ange ditt namn", form_phone:"Telefonnummer",
    form_service:"Typ av tjänst", form_service_ph:"Välj en tjänst",
    opt_men:"Herrskrädderi", opt_women:"Damskrädderi", opt_alter:"Ändringar", opt_custom:"Måttsytt",
    form_date:"Önskat datum", form_notes:"Orderdetaljer", form_notes_ph:"Beskriv plagget, önskat tyg, eventuella anteckningar...",
    form_upload_label:"Bild på önskad design", upload_text:"Dra bilden hit eller klicka för att ladda upp", upload_hint:"PNG · JPG upp till 5MB",
    form_submit:"Skicka förfrågan", form_success:"✓ Din förfrågan har mottagits, vi kontaktar dig snart.",
    contact_kicker:"Kontakta oss", contact_title:"Besök oss eller skriv till oss",
    contact_addr:"Riyadh, Al-Olaya-distriktet, King Fahd Road", contact_hours:"Lördag – torsdag: 09 – 22",
    footer_about:"Det fina skrädderiets hantverk — vi skapar plagg som förenar arv och modernitet med högsta kvalitet.",
    footer_links:"Snabblänkar", footer_contact:"Kontakt", footer_addr_link:"Adress & karta",
    footer_copy:"© 2026 Klädsömnad — Alla rättigheter förbehållna.",
  }
};

/* تسميات قيم الفلاتر (للوسوم داخل البطاقات) */
const VALUE_LABELS = {
  ar:{ "طبيعي":"طبيعي","صناعي":"صناعي","رسمي":"رسمي","يومي":"يومي","مناسبات":"مناسبات","صيفي":"صيفي","شتوي":"شتوي","لكل المواسم":"لكل المواسم" },
  en:{ "طبيعي":"Natural","صناعي":"Synthetic","رسمي":"Formal","يومي":"Daily","مناسبات":"Occasions","صيفي":"Summer","شتوي":"Winter","لكل المواسم":"All seasons" },
  sv:{ "طبيعي":"Naturligt","صناعي":"Syntetiskt","رسمي":"Formellt","يومي":"Vardag","مناسبات":"Tillfällen","صيفي":"Sommar","شتوي":"Vinter","لكل المواسم":"Alla säsonger" },
};

/* ---------- البيانات: الأقمشة (الأسماء والأوصاف متعددة اللغات) ---------- */
const FABRICS = [
  { latin:"Cotton",    type:"طبيعي", use:"يومي",    season:"صيفي",
    name:{ar:"قطن",en:"Cotton",sv:"Bomull"},
    desc:{ar:"خامة ناعمة تسمح بمرور الهواء، مثالية للملابس اليومية المريحة.",en:"A soft, breathable material, ideal for comfortable everyday wear.",sv:"Ett mjukt, andningsbart material, idealiskt för bekväma vardagsplagg."},
    img:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80" },
  { latin:"Linen",     type:"طبيعي", use:"يومي",    season:"صيفي",
    name:{ar:"كتان",en:"Linen",sv:"Linne"},
    desc:{ar:"خفيف ومنعش بمظهرٍ راقٍ، الأنسب لأجواء الصيف الحار.",en:"Light and fresh with a refined look, best for hot summer weather.",sv:"Lätt och svalt med ett förfinat utseende, bäst för varma somrar."},
    img:"https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=600&q=80" },
  { latin:"Silk",      type:"طبيعي", use:"مناسبات", season:"لكل المواسم",
    name:{ar:"حرير",en:"Silk",sv:"Siden"},
    desc:{ar:"لمعة فاخرة وملمس انسيابي يليق بفساتين السهرة والمناسبات.",en:"A luxurious sheen and flowing texture worthy of evening gowns and occasions.",sv:"En lyxig lyster och flytande textur värdig aftonklänningar och tillfällen."},
    img:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&q=80" },
  { latin:"Wool",      type:"طبيعي", use:"رسمي",    season:"شتوي",
    name:{ar:"صوف",en:"Wool",sv:"Ull"},
    desc:{ar:"دافئ ومتين، الخيار الأمثل للبدلات الرسمية والمعاطف الشتوية.",en:"Warm and durable, the ideal choice for formal suits and winter coats.",sv:"Varmt och hållbart, det idealiska valet för kostymer och vinterrockar."},
    img:"https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80" },
  { latin:"Velvet",    type:"طبيعي", use:"مناسبات", season:"شتوي",
    name:{ar:"مخمل",en:"Velvet",sv:"Sammet"},
    desc:{ar:"ملمس مخملي فخم وعمق لوني يمنح إطلالة ملكية في المناسبات.",en:"A plush texture and rich color depth giving a regal look at occasions.",sv:"En plyschig textur och rikt färgdjup som ger ett kungligt intryck."},
    img:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=600&q=80" },
  { latin:"Denim",     type:"طبيعي", use:"يومي",    season:"لكل المواسم",
    name:{ar:"دينم",en:"Denim",sv:"Denim"},
    desc:{ar:"قوي وعملي بطابع عصري، مناسب للقطع الكاجوال المتينة.",en:"Strong and practical with a modern character, suited to durable casual pieces.",sv:"Starkt och praktiskt med modern karaktär, passar slitstarka vardagsplagg."},
    img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=600&q=80" },
  { latin:"Polyester", type:"صناعي", use:"يومي",    season:"لكل المواسم",
    name:{ar:"بوليستر",en:"Polyester",sv:"Polyester"},
    desc:{ar:"مقاوم للتجاعيد وسهل العناية، اقتصادي ومتعدد الاستخدامات.",en:"Wrinkle-resistant and easy to care for, economical and versatile.",sv:"Skrynkelbeständigt och lättskött, ekonomiskt och mångsidigt."},
    img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80" },
  { latin:"Satin",     type:"صناعي", use:"مناسبات", season:"لكل المواسم",
    name:{ar:"ساتان",en:"Satin",sv:"Satäng"},
    desc:{ar:"سطح لامع ناعم ينساب بأناقة، مثالي للفساتين والبطانات الفاخرة.",en:"A smooth glossy surface that flows elegantly, ideal for dresses and fine linings.",sv:"En slät, glansig yta som faller elegant, idealisk för klänningar och fina foder."},
    img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" },
];

/* ---------- البيانات: المعرض ---------- */
const GALLERY = [
  { cap:{ar:"بدلة رسمية كلاسيكية",en:"Classic formal suit",sv:"Klassisk kostym"},  img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80" },
  { cap:{ar:"فستان سهرة مطرّز",en:"Embroidered evening gown",sv:"Broderad aftonklänning"},     img:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80" },
  { cap:{ar:"قميص قطني مفصّل",en:"Tailored cotton shirt",sv:"Måttsydd bomullsskjorta"},     img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80" },
  { cap:{ar:"عباية بقصّة عصرية",en:"Modern-cut abaya",sv:"Abaya med modernt snitt"},    img:"https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=700&q=80" },
  { cap:{ar:"طقم نسائي أنيق",en:"Elegant women's set",sv:"Elegant damset"},       img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80" },
  { cap:{ar:"بدلة بثلاث قطع",en:"Three-piece suit",sv:"Tredelad kostym"},       img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80" },
];

/* ---------- البيانات: آراء العملاء ---------- */
const TESTIMONIALS = [
  { stars:5, name:{ar:"خالد العتيبي",en:"Khalid Al-Otaibi",sv:"Khalid Al-Otaibi"}, role:{ar:"رجل أعمال",en:"Businessman",sv:"Affärsman"},
    text:{ar:"أفضل تجربة تفصيل مررت بها. البدلة جاءت بمقاسٍ مثالي ودقة في كل تفصيلة. احترافية تستحق الثناء.",
      en:"The best tailoring experience I've had. The suit came with a perfect fit and precision in every detail. Professionalism worthy of praise.",
      sv:"Den bästa skräddarupplevelsen jag haft. Kostymen passade perfekt med precision i varje detalj. Professionalism värd beröm."} },
  { stars:5, name:{ar:"نورة السبيعي",en:"Noura Al-Subaie",sv:"Noura Al-Subaie"}, role:{ar:"معلّمة",en:"Teacher",sv:"Lärare"},
    text:{ar:"فستان المناسبة كان أجمل مما تخيّلت، اختيار القماش رائع والتطريز دقيق. شكرًا على الذوق الرفيع.",
      en:"The occasion dress was more beautiful than I imagined — wonderful fabric choice and precise embroidery. Thank you for the refined taste.",
      sv:"Festklänningen var vackrare än jag föreställt mig — underbart tygval och precist broderi. Tack för den förfinade smaken."} },
  { stars:4, name:{ar:"عبدالله القحطاني",en:"Abdullah Al-Qahtani",sv:"Abdullah Al-Qahtani"}, role:{ar:"مهندس",en:"Engineer",sv:"Ingenjör"},
    text:{ar:"خدمة سريعة والتزام بالموعد، التعديلات تمّت باحترافية. سأكرّر التجربة بالتأكيد.",
      en:"Fast service and on-time commitment, the alterations were done professionally. I'll definitely return.",
      sv:"Snabb service och leverans i tid, ändringarna gjordes professionellt. Jag kommer definitivt tillbaka."} },
];

/* ---------- توليد بطاقات الأقمشة ---------- */
const fabricsGrid = document.getElementById('fabricsGrid');
function renderFabrics(list){
  const L = currentLang, VL = VALUE_LABELS[L];
  fabricsGrid.innerHTML = list.map(f => `
    <article class="fabric-card reveal" data-type="${f.type}" data-use="${f.use}" data-season="${f.season}">
      <div class="fabric-img" style="background-image:url('${f.img}')">
        <span class="fabric-badge">${VL[f.type]}</span>
      </div>
      <div class="fabric-body">
        <h4>${f.name[L]} ${f.name[L] !== f.latin ? `<span class="fabric-en">${f.latin}</span>` : ''}</h4>
        <p>${f.desc[L]}</p>
        <div class="fabric-tags">
          <span>${VL[f.use]}</span><span>${VL[f.season]}</span>
        </div>
      </div>
    </article>`).join('');
  observeReveals();
}

/* ---------- فلترة الأقمشة ---------- */
const activeFilter = { type:'all', use:'all', season:'all' };
function applyFabricFilter(){
  const filtered = FABRICS.filter(f =>
    (activeFilter.type==='all'   || f.type===activeFilter.type) &&
    (activeFilter.use==='all'    || f.use===activeFilter.use) &&
    (activeFilter.season==='all' || f.season===activeFilter.season)
  );
  renderFabrics(filtered);
  document.getElementById('noResults').hidden = filtered.length > 0;
}
document.getElementById('fabricFilters').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if(!btn) return;
  const { filter, value } = btn.dataset;
  activeFilter[filter] = value;
  btn.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  applyFabricFilter();
});

/* ---------- توليد المعرض ---------- */
function renderGallery(){
  const L = currentLang;
  document.getElementById('galleryGrid').innerHTML = GALLERY.map(g => `
    <figure class="gallery-item reveal">
      <img src="${g.img}" alt="${g.cap[L]}" loading="lazy" />
      <figcaption class="gallery-cap">${g.cap[L]}</figcaption>
    </figure>`).join('');
  observeReveals();
}

/* ---------- توليد آراء العملاء ---------- */
function renderTestimonials(){
  const L = currentLang;
  document.getElementById('testimonialsGrid').innerHTML = TESTIMONIALS.map(t => `
    <article class="testi-card reveal">
      <div class="stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <p class="testi-text">"${t.text[L]}"</p>
      <div class="testi-author">
        <span class="testi-avatar">${t.name[L].charAt(0)}</span>
        <div><strong>${t.name[L]}</strong><small>${t.role[L]}</small></div>
      </div>
    </article>`).join('');
  observeReveals();
}

/* ---------- تطبيق اللغة ---------- */
function setLanguage(lang){
  if(!I18N[lang]) return;
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;

  // النصوص الثابتة
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  // النصوص النائبة (placeholders)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if(dict[key] !== undefined) el.placeholder = dict[key];
  });

  // تفعيل زر اللغة
  document.querySelectorAll('#langSwitch button').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang));

  // إعادة توليد المحتوى الديناميكي
  applyFabricFilter();
  renderGallery();
  renderTestimonials();
}
document.getElementById('langSwitch').addEventListener('click', e => {
  const btn = e.target.closest('button[data-lang]');
  if(btn) setLanguage(btn.dataset.lang);
});

/* ---------- الهيدر عند التمرير ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 60));

/* ---------- قائمة الجوال ---------- */
const nav = document.getElementById('mainNav');
document.getElementById('menuToggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

/* ---------- رفع صورة التصميم ---------- */
const uploadBox = document.getElementById('uploadBox');
const designInput = document.getElementById('design');
const previewBox = document.getElementById('previewBox');
const previewImg = document.getElementById('previewImg');
function showPreview(file){
  if(!file || !file.type.startsWith('image/')) return;
  if(file.size > 5 * 1024 * 1024){ alert('5MB+'); return; }
  const reader = new FileReader();
  reader.onload = e => { previewImg.src = e.target.result; previewBox.hidden = false; };
  reader.readAsDataURL(file);
}
designInput.addEventListener('change', () => showPreview(designInput.files[0]));
document.getElementById('removePreview').addEventListener('click', () => { designInput.value=''; previewBox.hidden = true; });
['dragover','dragenter'].forEach(ev => uploadBox.addEventListener(ev, e => { e.preventDefault(); uploadBox.classList.add('dragover'); }));
['dragleave','drop'].forEach(ev => uploadBox.addEventListener(ev, e => { e.preventDefault(); uploadBox.classList.remove('dragover'); }));
uploadBox.addEventListener('drop', e => { designInput.files = e.dataTransfer.files; showPreview(e.dataTransfer.files[0]); });

/* ---------- إرسال نموذج الحجز ---------- */
const form = document.getElementById('bookingForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  if(!form.checkValidity()){ form.reportValidity(); return; }
  document.getElementById('formSuccess').hidden = false;
  form.reset();
  previewBox.hidden = true;
  setTimeout(() => { document.getElementById('formSuccess').hidden = true; }, 6000);
});

/* ---------- الحركة عند الظهور (Reveal) ---------- */
function observeReveals(){
  if(!revealObserver){
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('visible'); revealObserver.unobserve(en.target); } });
    }, { threshold:.12 });
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ---------- الإقلاع ---------- */
document.querySelectorAll('.service-card,.feature,.section-head').forEach(el => el.classList.add('reveal'));
setLanguage('ar');   // اللغة الافتراضية
observeReveals();
