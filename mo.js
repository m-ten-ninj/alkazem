document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تأثير شريط الملاحة عند التمرير لأسفل
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 16, 18, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(15, 16, 18, 0.75)';
            header.style.boxShadow = 'none';
        }
    });

    // 2. إغلاق القائمة عند الضغط على أي رابط في الجوال
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 3. معالجة نموذج التواصل والتأكد من صحة البيانات
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;

            // تغيير نص الزر أثناء الإرسال
            submitBtn.innerText = 'جاري الإرسال...';
            submitBtn.disabled = true;

            // محاكاة إرسال البيانات (يمكن ربطها بـ API مستقبلاً)
            setTimeout(() => {
                alert('شكراً لك! تم إرسال رسالتك بنجاح وسنتواصل معك قريباً.');
                contactForm.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});