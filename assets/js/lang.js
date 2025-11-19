const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",

        hero_kicker: "Computer Engineer • Entry-Level Software Developer",
        hero_title: "Hi, I’m Şira 👋",
        hero_subtitle:
            "Entry-level software developer with a strong focus on backend development and RESTful APIs.",
        hero_description:
            "I graduated with a full scholarship from an ABET-accredited Computer Engineering program where the language of instruction was English. I enjoy building secure and scalable web applications, especially backend services, APIs and database-driven solutions using Python, Flask and PostgreSQL. I’m eager to contribute to development teams, learn from experienced engineers and grow as a backend / full-stack developer.",
        hero_cv_button: "Download my CV",
        hero_github_button: "GitHub profile",
        hero_linkedin_button: "LinkedIn",
        hero_badge_title: "What am I working on now?",
        hero_badge_body:
            "• Improving my portfolio and keeping my GitHub projects up to date.<br />" +
            "• Deepening my knowledge of backend development with Python, Flask, PostgreSQL and Docker.<br />" +
            "• Actively applying for entry-level software developer / backend developer positions.",

        section_about_title: "About Me",
        section_about_subtitle: "Who I am and what I want to work on.",
        about_text:
            "I am a Computer Engineering graduate from Eastern Mediterranean University (EMU), where I studied with a full scholarship in an ABET-accredited program and graduated with a CGPA of 3.08. During my studies and internships, I focused on backend development, RESTful APIs, database design and secure web applications. I enjoy solving real-world problems with clean, maintainable code and collaborating in Agile teams. In my career, I aim to work as a backend or full-stack developer, mainly using Python, Flask, SQL and modern web technologies.",

        section_skills_title: "Technical Skills",
        section_skills_subtitle:
            "Languages, technologies and tools I work with.",
        skills_langs_title: "Languages",
        skills_web_title: "Web / Framework",
        skills_tools_title: "Tools & Other",

        section_projects_title: "Projects",
        section_projects_subtitle:
            "Some of the academic and internship projects I have built and shared on GitHub.",
        project1_title: "People Detection and Counting System",
        project1_desc:
            "A real-time and media-based people detection and counting platform built with YOLOv8 and OpenCV. I developed the backend with Flask, integrated USB/IP camera support, implemented user roles with Flask-Login, and designed an admin dashboard for monitoring. The system supports live streams and uploaded media, enforces secure authentication and upload limits, and was selected as the best graduation project.",
        project2_title: "Online Student Documentation System",
        project2_desc:
            "A secure web platform for managing student records using Python, Flask and PostgreSQL. I implemented a login system with DES-encrypted passwords and RSA-based authentication, designed role-based access control in the database, and focused on backend logic, session management and dynamic data display. The project demonstrates secure CRUD operations and access control in a real-life scenario.",
        project3_title: "MKE Web Scraping & Data API",
        project3_desc:
            "An internal web scraping and data access system developed during my internship at MKE. I built automated scraping scripts with Selenium and BeautifulSoup to collect dynamic web content, stored the data securely in a PostgreSQL database and exposed the information through a Flask-based RESTful API. The solution was designed to run on a schedule and keep internal data up to date.",
        project_github_link: "GitHub",

        section_education_title: "Education",
        section_education_subtitle:
            "My degree and important academic achievements.",
        edu1_title: "Eastern Mediterranean University (EMU)",
        edu1_meta: "B.Sc. in Computer Engineering • 2020 – 2025 • CGPA: 3.08",
        edu1_desc:
            "Graduated with a full scholarship from an ABET-accredited Computer Engineering program where the language of instruction was English. Took courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Systems and Web Development. Awarded the Best Graduation Project Certificate and several Honour / High Honour certificates.",
        edu2_title: "İçel Anatolian High School",
        edu2_meta: "High School • 2016 – 2020",

        section_contact_title: "Contact",
        section_contact_subtitle:
            "Feel free to reach out if you’d like to work together or talk about my projects.",
        contact_email_label: "Email:",
        contact_github_label: "GitHub:",
        contact_linkedin_label: "LinkedIn:",
        contact_cv_label: "CV:",
        footer_text: "© <span id=\"year\"></span> Şira Eroğlu. All rights reserved."
    },
    tr: {
        nav_about: "Hakkımda",
        nav_skills: "Beceriler",
        nav_projects: "Projeler",
        nav_education: "Eğitim",
        nav_contact: "İletişim",

        hero_kicker: "Bilgisayar Mühendisi • Yeni Mezun Yazılım Geliştirici",
        hero_title: "Merhaba, ben Şira 👋",
        hero_subtitle:
            "Backend geliştirme ve RESTful API’lere odaklanan yeni mezun yazılım geliştirici.",
        hero_description:
            "ABET akreditasyonlu, eğitim dili İngilizce olan Bilgisayar Mühendisliği programından tam burslu olarak mezun oldum. Özellikle Python, Flask ve PostgreSQL kullanarak güvenli ve ölçeklenebilir web uygulamaları, backend servisleri ve veritabanı tabanlı çözümler geliştirmeyi seviyorum. Geliştirme ekiplerinde sorumluluk alarak, deneyimli mühendislerden öğrenerek ve kendimi sürekli geliştirerek backend / full-stack geliştirici olarak kariyerime devam etmek istiyorum.",
        hero_cv_button: "CV’mi indir",
        hero_github_button: "GitHub profilim",
        hero_linkedin_button: "LinkedIn",
        hero_badge_title: "Şu anda ne üzerinde çalışıyorum?",
        hero_badge_body:
            "• Portföyümü ve GitHub projelerimi güncel tutuyorum.<br />" +
            "• Python, Flask, PostgreSQL ve Docker ile backend geliştirme konusunda kendimi derinleştiriyorum.<br />" +
            "• Entry-level yazılım geliştirici / backend geliştirici pozisyonlarına aktif olarak başvuruyorum.",

        section_about_title: "Hakkımda",
        section_about_subtitle:
            "Kısaca kimim ve hangi alanlarda çalışmak istiyorum?",
        about_text:
            "Eastern Mediterranean University (EMU) Bilgisayar Mühendisliği bölümünden, tam burslu ve ABET akreditasyonlu programdan 3.08 ortalama ile mezun oldum. Eğitimim ve stajlarım boyunca backend geliştirme, RESTful API’ler, veritabanı tasarımı ve güvenli web uygulamaları üzerine yoğunlaştım. Gerçek hayat problemlerini temiz ve sürdürülebilir kod ile çözmeyi ve Agile takımlarda çalışmayı seviyorum. Kariyerimde ağırlıklı olarak Python, Flask, SQL ve modern web teknolojileriyle backend ya da full-stack geliştirici olarak ilerlemek istiyorum.",

        section_skills_title: "Teknik Beceriler",
        section_skills_subtitle:
            "Kullandığım diller, teknolojiler ve araçlar.",
        skills_langs_title: "Diller",
        skills_web_title: "Web / Framework",
        skills_tools_title: "Araçlar & Diğer",

        section_projects_title: "Projeler",
        section_projects_subtitle:
            "Akademik çalışmalarım ve stajlarım sırasında geliştirdiğim bazı projeler.",
        project1_title: "Kişi Tespit ve Sayma Sistemi",
        project1_desc:
            "YOLOv8 ve OpenCV tabanlı gerçek zamanlı ve medya tabanlı kişi tespit ve sayma platformu. Backend tarafını Flask ile geliştirdim, USB/IP kamera desteği ekledim, Flask-Login ile kullanıcı rolleri ve yetkilendirme kurguladım ve izleme için bir yönetim paneli oluşturdum. Sistem canlı yayınlar ve yüklenen medya üzerinde çalışıyor, güvenli kimlik doğrulama ve dosya yükleme limitlerine sahip. Bu proje en iyi mezuniyet projesi seçildi.",
        project2_title: "Online Öğrenci Doküman Sistemi",
        project2_desc:
            "Python, Flask ve PostgreSQL kullanarak öğrenci kayıtlarının yönetildiği güvenli bir web platformu. DES ile şifrelenen parolalar ve RSA tabanlı kimlik doğrulama içeren bir giriş sistemi geliştirdim; veritabanında rol tabanlı yetkilendirme kurguladım. Backend akışı, oturum yönetimi ve dinamik veri gösterimi üzerine yoğunlaştım. Güvenli CRUD işlemlerini ve erişim kontrolünü gerçekçi bir senaryoda gösteriyor.",
        project3_title: "MKE Web Scraping ve Veri API Sistemi",
        project3_desc:
            "MKE stajım sırasında geliştirdiğim dahili bir web scraping ve veri erişim çözümü. Selenium ve BeautifulSoup ile dinamik web içeriklerini otomatik olarak toplayan scriptler yazdım, verileri PostgreSQL veritabanında güvenli şekilde sakladım ve Flask tabanlı RESTful API ile bu verileri uygulamalara sundum. Sistem belirli aralıklarla çalışacak şekilde tasarlanarak iç veri setlerinin güncel kalması sağlandı.",
        project_github_link: "GitHub",

        section_education_title: "Eğitim",
        section_education_subtitle:
            "Lisans eğitimim ve önemli akademik başarılarım.",
        edu1_title: "Eastern Mediterranean University (EMU)",
        edu1_meta: "Bilgisayar Mühendisliği Lisans • 2020 – 2025 • Ortalama: 3.08",
        edu1_desc:
            "ABET akreditasyonlu ve eğitim dili İngilizce olan Bilgisayar Mühendisliği programından tam burslu mezun oldum. Veri Yapıları, Algoritmalar, Nesne Yönelimli Programlama, Veritabanı Sistemleri ve Web Geliştirme gibi dersler aldım. En İyi Mezuniyet Projesi sertifikası ve Honour / High Honour belgeleriyle ödüllendirildim.",
        edu2_title: "İçel Anadolu Lisesi",
        edu2_meta: "Lise Eğitimi • 2016 – 2020",

        section_contact_title: "İletişim",
        section_contact_subtitle:
            "Birlikte çalışmak veya projelerim hakkında konuşmak istersen benimle iletişime geçebilirsin.",
        contact_email_label: "E-posta:",
        contact_github_label: "GitHub:",
        contact_linkedin_label: "LinkedIn:",
        contact_cv_label: "CV:",
        footer_text: "© <span id=\"year\"></span> Şira Eroğlu. Tüm hakları saklıdır."
    }
};

window.setLanguage = function (lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const text = translations[lang][key];
        if (text) {
            el.innerHTML = text;
        }
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("siteLang", lang);

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
};
