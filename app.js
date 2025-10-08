const state = {
    courses: [
        {
            id: 'firma',
            title: 'Firma',
            description: 'Şirket kültürünü ve temel süreçleri anlatan giriş eğitimi.',
            modules: [
                {
                    id: 'history',
                    title: 'Tarihimiz',
                    duration: '08:30',
                    type: 'video',
                    source: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    summary: 'Şirketimizin kuruluş hikâyesi, dönüm noktaları ve büyüme yolculuğu.'
                },
                {
                    id: 'vision',
                    title: 'Vizyon & Değerler',
                    duration: '06:10',
                    type: 'video',
                    source: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    summary: 'Kurumsal vizyonumuz, çalışan davranış ilkelerimiz ve liderlik yaklaşımımız.'
                },
                {
                    id: 'production',
                    title: 'Üretim & Depolar',
                    duration: '12:00',
                    type: 'youtube',
                    youtubeId: 'Sagg08DrO5U',
                    summary: 'Tüm üretim tesislerimizin turları, depo düzeni ve güvenlik kuralları.'
                }
            ],
            quiz: {
                title: '1. Bölüm - Firma',
                questions: [
                    {
                        text: 'Şirketimizin kuruluş yılı aşağıdakilerden hangisidir?',
                        options: ['1998', '2005', '2012'],
                        answer: 0
                    },
                    {
                        text: 'Kurumsal değerlerimizden biri değildir?',
                        options: ['Müşteri odaklılık', 'Şeffaflık', 'Kısa vadeli düşünme'],
                        answer: 2
                    },
                    {
                        text: 'Depolarda güvenli giriş için ilk yapılması gereken?',
                        options: ['Koruyucu ekipman takmak', 'Yemekhane alanını kontrol etmek', 'Ziyaretçi kartı almak'],
                        answer: 0
                    }
                ]
            }
        },
        {
            id: 'urun',
            title: 'Ürün Grupları',
            description: 'Ürün portföyümüz ve teknik detaylarını öğrenin.',
            modules: [
                {
                    id: 'pvc',
                    title: 'PVC Boru ve Ek Parçalar',
                    duration: '09:12',
                    type: 'video',
                    source: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    summary: 'PVC ürün ailesinin çeşitleri ve kullanım alanları.'
                },
                {
                    id: 'pprc',
                    title: 'PPRC Sistemleri',
                    duration: '07:48',
                    type: 'video',
                    source: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    summary: 'PPRC ürün gamı ve montaj ipuçları.'
                },
                {
                    id: 'silent',
                    title: 'Sessiz Boru Sistemleri',
                    duration: '10:05',
                    type: 'youtube',
                    youtubeId: '9No-FiEInLA',
                    summary: 'Sessiz boru sistemlerinin avantajları ve referans projeler.'
                }
            ],
            quiz: {
                title: '2. Bölüm - Ürünler',
                questions: [
                    {
                        text: 'PVC boruların en güçlü kullanım alanı nedir?',
                        options: ['Elektrik tesisatı', 'Temiz su ve atık su hatları', 'Isıtma ve soğutma hatları'],
                        answer: 1
                    },
                    {
                        text: 'PPRC kaynak işleminde dikkat edilmesi gereken süre neyi etkiler?',
                        options: ['Bağlantı dayanıklılığını', 'Ürünün rengini', 'Depo stok seviyesini'],
                        answer: 0
                    },
                    {
                        text: 'Sessiz boru sistemlerinin temel faydası nedir?',
                        options: ['Maliyetin düşmesi', 'Akustik konfor sağlaması', 'Bakım gerektirmemesi'],
                        answer: 1
                    }
                ]
            }
        },
        {
            id: 'isg',
            title: 'İş Sağlığı ve Güvenliği',
            description: 'Tüm çalışanlar için zorunlu İSG eğitimleri.',
            modules: [
                {
                    id: 'fire',
                    title: 'Acil Durum Prosedürleri',
                    duration: '08:55',
                    type: 'video',
                    source: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    summary: 'Yangın, deprem ve tahliye süreçleri adım adım anlatılır.'
                },
                {
                    id: 'ppe',
                    title: 'Kişisel Koruyucu Ekipmanlar',
                    duration: '06:22',
                    type: 'video',
                    source: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    summary: 'Doğru ekipman seçimi ve kullanım örnekleri.'
                },
                {
                    id: 'risk',
                    title: 'Risk Bildirim Süreçleri',
                    duration: '09:40',
                    type: 'youtube',
                    youtubeId: '2g811Eo7K8U',
                    summary: 'Tehlike bildirim prosedürleri ve dijital platform kullanımı.'
                }
            ],
            quiz: {
                title: '3. Bölüm - İSG',
                questions: [
                    {
                        text: 'Acil durum alarmı duyulduğunda ilk adım nedir?',
                        options: ['İşe devam etmek', 'Çıkış planını uygulamak', 'Tüm pencereleri kapatmak'],
                        answer: 1
                    },
                    {
                        text: 'Koruyucu gözlük hangi durumlarda kullanılmalıdır?',
                        options: ['Sadece dışarıda', 'Sadece bakımda', 'Kimyasal ve mekanik risk içeren tüm işlemlerde'],
                        answer: 2
                    },
                    {
                        text: 'Risk bildirim platformu ne zaman kullanılmalıdır?',
                        options: ['Sadece kaza sonrası', 'Tehlike fark edildiği anda', 'Yılda bir'],
                        answer: 1
                    }
                ]
            }
        }
    ],
    personalDevelopment: [
        {
            id: 'time',
            title: 'Zaman Yönetimi Nasıl Geliştirilir?',
            icon: '🕒',
            body: 'Zaman yönetimi için önceliklendirme, hedef belirleme ve blok çalışma tekniklerini kullanın. Günün ilk saatlerinde en zor görevlere odaklanmak verimliliği artırır.'
        },
        {
            id: 'customer',
            title: 'Müşteri Nasıl İkna Edilir?',
            icon: '🤝',
            body: 'Empati kurun, müşterinin ihtiyacını doğru dinleyin ve çözümünüzün değerini net anlatın. Güven yaratmak için referans ve başarı hikâyelerinden yararlanın.'
        },
        {
            id: 'leadership',
            title: 'Liderlik ve Takım Yönetimi',
            icon: '🧭',
            body: 'Liderlik; vizyonu paylaşmak, ekip üyelerinin güçlü yönlerini ortaya çıkarmak ve düzenli geri bildirim vermekle başlar. Yetki devri motivasyonu yükseltir.'
        },
        {
            id: 'decision',
            title: 'Doğru Stratejik Karar Alma',
            icon: '🎯',
            body: 'Veriye dayalı karar süreçlerinde risk senaryolarını belirleyin. Kararlarınızı kurumsal hedeflerle hizalayın ve etkilenen paydaşlarla iletişim kurun.'
        },
        {
            id: 'problem',
            title: 'Problem Çözme Yeteneği',
            icon: '🧩',
            body: 'Kök neden analizi, beyin fırtınası ve hızlı prototip yöntemleri ile problemleri sistematik çözüme kavuşturabilirsiniz.'
        },
        {
            id: 'cyber',
            title: 'Siber Güvenlik Bilinci',
            icon: '🔐',
            body: 'Güçlü şifreler oluşturun, iki faktörlü doğrulamayı aktif edin ve phishing e-postalarına karşı dikkatli olun. Bilinmeyen bağlantılara tıklamayın.'
        }
    ],
    faq: [
        {
            question: 'Yıllık izin hakkı nasıl hesaplanır?',
            answer: 'Çalışma sürenize göre yıllık izin gün sayısı İnsan Kaynakları yönetmeliğinde belirtilmiştir. Portal üzerinden talepte bulunabilirsiniz.'
        },
        {
            question: 'E-öğrenme modüllerine nereden ulaşırım?',
            answer: 'Sol menüdeki Online Eğitimler sekmesinden kayıtlı olduğunuz tüm modüllere erişebilirsiniz.'
        },
        {
            question: 'Sertifikamı nasıl indirebilirim?',
            answer: 'Tüm zorunlu quizleri başarıyla tamamladıktan sonra Sertifika bölümündeki “Sertifikamı Al” butonu aktif hale gelir.'
        }
    ],
    announcements: [
        {
            title: 'Şirket İçi İletişim Atölyesi',
            body: '24.02.2025 tarihinde hibrit olarak gerçekleşecek atölyemize katılarak etkili iletişim tekniklerini öğrenebilirsiniz.',
            icon: '📣'
        },
        {
            title: 'Kurban Bayramı Tatil Takvimi',
            body: 'Tatil döneminde üretim planlarımızı gözden geçirmek için vardiya yöneticilerinizle iletişime geçmeyi unutmayın.',
            icon: '🗓️'
        }
    ],
    quizResults: {},
    moduleProgress: {},
    activeCourseId: null,
    activeModuleId: null,
    isAdmin: false,
    adminLoginError: '',
    youtubePlayer: null,
    youtubeTracker: null,
    youtubeAPIReady: typeof YT !== 'undefined' && !!YT.Player
};

const navButtons = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const toastContainer = document.querySelector('.toast-container');
const quizModal = document.getElementById('quizModal');
const quizModalContent = document.getElementById('quizModalContent');
const closeQuizModalButton = document.getElementById('closeQuizModal');

const courseView = document.getElementById('online-trainings');
const quizView = document.getElementById('quizzes');
const personalView = document.getElementById('personal-growth');
const faqView = document.getElementById('faq');
const announcementView = document.getElementById('announcements');
const adminView = document.getElementById('admin');

function initProgress() {
    state.courses.forEach(course => {
        state.moduleProgress[course.id] = {};
        course.modules.forEach(module => {
            state.moduleProgress[course.id][module.id] = {
                percent: 0,
                completed: false
            };
        });
    });
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 350);
    }, type === 'error' ? 4000 : 2500);
}

function setActiveView(targetId) {
    views.forEach(view => view.classList.remove('active-view'));
    const target = document.getElementById(targetId);
    if (target) {
        target.classList.add('active-view');
    }
    navButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.target === targetId);
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('locked')) {
            showToast('Bu bölüme erişebilmek için önceki gereksinimleri tamamlayın.', 'error');
            return;
        }
        setActiveView(button.dataset.target);
        renderView(button.dataset.target);
    });
});

closeQuizModalButton.addEventListener('click', closeQuizModal);
quizModal.addEventListener('click', event => {
    if (event.target === quizModal) {
        closeQuizModal();
    }
});

function closeQuizModal() {
    quizModal.setAttribute('aria-hidden', 'true');
    quizModal.classList.remove('show');
    quizModalContent.innerHTML = '';
}

function renderView(viewId) {
    switch (viewId) {
        case 'online-trainings':
            renderOnlineTrainings();
            break;
        case 'quizzes':
            renderQuizzes();
            break;
        case 'personal-growth':
            renderPersonalGrowth();
            break;
        case 'faq':
            renderFaq();
            break;
        case 'announcements':
            renderAnnouncements();
            break;
        case 'admin':
            renderAdminPanel();
            break;
    }
}

function getUnlockedCourseIndex() {
    return state.courses.findIndex(course => !isCourseCompleted(course));
}

function isCourseCompleted(course) {
    const allModulesDone = course.modules.every(module => state.moduleProgress[course.id][module.id].completed);
    const quizResult = state.quizResults[course.id];
    return allModulesDone && quizResult && quizResult.passed;
}

function calculateCourseProgress(course) {
    if (!course.modules.length) return 0;
    const moduleStates = state.moduleProgress[course.id];
    const totalPercent = Object.values(moduleStates).reduce((acc, value) => acc + value.percent, 0);
    return Math.floor(totalPercent / course.modules.length);
}

function renderOnlineTrainings() {
    courseView.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <div>
            <h2>Online Eğitimler</h2>
            <p class="section-description">Modülleri sırasıyla tamamlayın, ardından quizlere katılarak sertifikanızı kazanın.</p>
        </div>
        <div class="badge-chip">🎯 Sıralı İlerleme Aktif</div>
    `;

    courseView.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'course-grid';
    courseView.appendChild(grid);

    const unlockedIndex = getUnlockedCourseIndex();
    const lockIndex = unlockedIndex === -1 ? state.courses.length : unlockedIndex;

    state.courses.forEach((course, index) => {
        const courseCard = document.createElement('article');
        courseCard.className = 'course-card';
        courseCard.dataset.courseId = course.id;
        if (index > lockIndex) {
            courseCard.classList.add('locked');
        }

        const progress = calculateCourseProgress(course);
        const modulesCompleted = course.modules.filter(module => state.moduleProgress[course.id][module.id].completed).length;

        courseCard.innerHTML = `
            <div>
                <h3>${course.title}</h3>
                <p class="section-description">${course.description}</p>
            </div>
            <div class="training-progress-summary" data-course-summary="${course.id}">
                <span>Modül Tamamlanma: ${modulesCompleted}/${course.modules.length}</span>
                <span class="percentage">%${progress}</span>
            </div>
        `;

        const moduleList = document.createElement('div');
        moduleList.className = 'module-list';

        course.modules.forEach((module, moduleIndex) => {
            const moduleItem = document.createElement('button');
            moduleItem.type = 'button';
            moduleItem.className = 'module-item';
            moduleItem.dataset.courseId = course.id;
            moduleItem.dataset.moduleId = module.id;
            moduleItem.dataset.moduleIndex = moduleIndex;

            const moduleState = state.moduleProgress[course.id][module.id];
            const locked = index > lockIndex || (moduleIndex > 0 && !state.moduleProgress[course.id][course.modules[moduleIndex - 1].id].completed);

            if (locked) {
                moduleItem.classList.add('locked');
            }

            moduleItem.innerHTML = `
                <div class="module-meta">
                    <strong>${moduleIndex + 1}. Modül - ${module.title}</strong>
                    <span>${module.duration}</span>
                </div>
                <p class="section-description">${module.summary}</p>
                <div class="progress-bar"><span data-progress-key="${course.id}::${module.id}" style="width:${moduleState.percent}%"></span></div>
                <small class="module-status" data-status-key="${course.id}::${module.id}">${moduleState.completed ? 'Tamamlandı ✅' : `İzlenme Oranı: %${moduleState.percent}`}</small>
            `;

            moduleItem.addEventListener('click', () => {
                if (moduleItem.classList.contains('locked')) {
                    showToast('Bu modüle geçmeden önce önceki modülü tamamlayın.', 'error');
                    return;
                }
                state.activeCourseId = course.id;
                state.activeModuleId = module.id;
                openModule(course, module);
            });

            moduleList.appendChild(moduleItem);
        });

        if (!course.modules.length) {
            const empty = document.createElement('div');
            empty.className = 'empty-state';
            empty.style.padding = '20px';
            empty.textContent = 'Henüz modül eklenmemiş. Yönetim panelinden içerik oluşturun.';
            moduleList.appendChild(empty);
        }

        courseCard.appendChild(moduleList);
        grid.appendChild(courseCard);
    });

    const playerPanel = document.createElement('section');
    playerPanel.className = 'player-panel';
    playerPanel.innerHTML = `
        <h3>Modül İçeriği</h3>
        <div id="videoContainer">
            <div class="empty-state">
                <p>Bir modül seçtiğinizde video burada açılacaktır.</p>
            </div>
        </div>
        <div class="module-info"></div>
    `;
    courseView.appendChild(playerPanel);

    refreshCourseAccess();
    state.courses.forEach(course => refreshModuleLocks(course.id));

    if (state.activeCourseId && state.activeModuleId) {
        const course = state.courses.find(item => item.id === state.activeCourseId);
        const module = course?.modules.find(item => item.id === state.activeModuleId);
        if (course && module) {
            openModule(course, module);
        }
    }
}

function openModule(course, module) {
    const playerPanel = document.querySelector('.player-panel');
    const videoContainer = playerPanel.querySelector('#videoContainer');
    const moduleInfo = playerPanel.querySelector('.module-info');

    moduleInfo.innerHTML = `
        <h4>${course.title} · ${module.title}</h4>
        <p>${module.summary}</p>
    `;

    if (state.youtubePlayer) {
        state.youtubePlayer.stopVideo?.();
        state.youtubePlayer.destroy?.();
        state.youtubePlayer = null;
    }
    if (state.youtubeTracker) {
        clearInterval(state.youtubeTracker);
        state.youtubeTracker = null;
    }

    if (module.type === 'video') {
        const video = document.createElement('video');
        video.src = module.source;
        video.controls = true;
        video.setAttribute('playsinline', 'true');
        videoContainer.innerHTML = '';
        videoContainer.appendChild(video);

        video.addEventListener('timeupdate', () => {
            if (!video.duration) return;
            const percent = Math.min(100, Math.floor((video.currentTime / video.duration) * 100));
            updateModuleProgress(course.id, module.id, percent);
        });

        video.addEventListener('ended', () => {
            updateModuleProgress(course.id, module.id, 100, true);
        });
    } else if (module.type === 'youtube') {
        const iframeContainer = document.createElement('div');
        iframeContainer.id = 'youtubePlayer';
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframeContainer);

        if (state.youtubeAPIReady) {
            createYouTubePlayer(course, module);
        } else {
            state.pendingYouTubeModule = { course, module };
        }
    }
}

window.onYouTubeIframeAPIReady = () => {
    state.youtubeAPIReady = true;
    if (state.pendingYouTubeModule) {
        const { course, module } = state.pendingYouTubeModule;
        createYouTubePlayer(course, module);
        state.pendingYouTubeModule = null;
    }
};

function createYouTubePlayer(course, module) {
    state.youtubePlayer = new YT.Player('youtubePlayer', {
        videoId: module.youtubeId,
        playerVars: {
            controls: 1,
            rel: 0,
            modestbranding: 1
        },
        events: {
            onReady: event => {
                state.youtubeTracker = setInterval(() => {
                    const duration = event.target.getDuration();
                    if (duration > 0) {
                        const percent = Math.min(100, Math.floor((event.target.getCurrentTime() / duration) * 100));
                        updateModuleProgress(course.id, module.id, percent);
                    }
                }, 1000);
            },
            onStateChange: event => {
                if (event.data === YT.PlayerState.ENDED) {
                    updateModuleProgress(course.id, module.id, 100, true);
                }
            }
        }
    });
}

function updateModuleProgress(courseId, moduleId, percent, forceComplete = false) {
    const moduleState = state.moduleProgress[courseId][moduleId];
    const nextPercent = forceComplete ? 100 : Math.max(moduleState.percent, percent);
    const completed = forceComplete || nextPercent >= 95;
    const hasChanged = nextPercent !== moduleState.percent || completed !== moduleState.completed;

    if (!hasChanged) return;

    state.moduleProgress[courseId][moduleId] = {
        percent: nextPercent,
        completed
    };
    refreshModuleUI(courseId, moduleId);
    refreshCourseSummary(courseId);
    refreshCourseAccess();

    if (completed && !moduleState.completed) {
        showToast('Tebrikler! Bu modülü tamamladınız.');
        const course = state.courses.find(item => item.id === courseId);
        const allModulesDone = course?.modules.every(module => state.moduleProgress[courseId][module.id].completed);
        if (allModulesDone) {
            renderQuizzes();
            if (!isCourseCompleted(course)) {
                showToast('Tüm modülleri tamamladınız. Quiz çözerek eğitimi bitirebilirsiniz.');
            }
        }
        if (isCourseCompleted(course)) {
            showToast('Eğitimi tamamladınız. Quiz bölümüne geçebilirsiniz.');
        }
    }
}

function refreshModuleUI(courseId, moduleId) {
    const key = `${courseId}::${moduleId}`;
    const moduleState = state.moduleProgress[courseId][moduleId];
    const progressEl = document.querySelector(`.progress-bar span[data-progress-key="${key}"]`);
    const statusEl = document.querySelector(`.module-status[data-status-key="${key}"]`);
    if (progressEl) {
        progressEl.style.width = `${moduleState.percent}%`;
    }
    if (statusEl) {
        statusEl.textContent = moduleState.completed ? 'Tamamlandı ✅' : `İzlenme Oranı: %${moduleState.percent}`;
    }
}

function refreshCourseSummary(courseId) {
    const course = state.courses.find(item => item.id === courseId);
    if (!course) return;
    const summary = document.querySelector(`.training-progress-summary[data-course-summary="${courseId}"]`);
    if (!summary) return;
    const modulesCompleted = course.modules.filter(module => state.moduleProgress[course.id][module.id].completed).length;
    const progressPercent = calculateCourseProgress(course);
    const [countEl, percentEl] = summary.querySelectorAll('span');
    if (countEl) countEl.textContent = `Modül Tamamlanma: ${modulesCompleted}/${course.modules.length}`;
    if (percentEl) percentEl.textContent = `%${progressPercent}`;
}

function refreshModuleLocks(courseId, courseLockedOverride = null) {
    const course = state.courses.find(item => item.id === courseId);
    if (!course) return;
    const unlockedIndex = getUnlockedCourseIndex();
    const lockIndex = unlockedIndex === -1 ? state.courses.length : unlockedIndex;
    const courseIndex = state.courses.findIndex(item => item.id === courseId);
    const courseLocked = courseLockedOverride !== null ? courseLockedOverride : courseIndex > lockIndex;

    course.modules.forEach((module, index) => {
        const button = document.querySelector(`.module-item[data-course-id="${courseId}"][data-module-id="${module.id}"]`);
        if (!button) return;
        const prevCompleted = index === 0 || state.moduleProgress[courseId][course.modules[index - 1].id].completed;
        if (courseLocked || !prevCompleted) {
            button.classList.add('locked');
        } else {
            button.classList.remove('locked');
        }
    });
}

function refreshCourseAccess() {
    const unlockedIndex = getUnlockedCourseIndex();
    const lockIndex = unlockedIndex === -1 ? state.courses.length : unlockedIndex;
    state.courses.forEach((course, index) => {
        const card = document.querySelector(`.course-card[data-course-id="${course.id}"]`);
        if (!card) return;
        if (index > lockIndex) {
            card.classList.add('locked');
        } else {
            card.classList.remove('locked');
        }
        refreshModuleLocks(course.id, index > lockIndex);
    });
}

function renderQuizzes() {
    quizView.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <div>
            <h2>Quizler ve Sertifikalar</h2>
            <p class="section-description">Her kursu tamamladıktan sonra quizini çözerek ilerleyin. %50 üzeri başarı ile geçer not alırsınız.</p>
        </div>
    `;
    quizView.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'quiz-grid';
    quizView.appendChild(grid);

    state.courses.forEach((course, index) => {
        const quizCard = document.createElement('article');
        quizCard.className = 'quiz-card';

        const quizResult = state.quizResults[course.id];
        const modulesCompleted = course.modules.every(module => state.moduleProgress[course.id][module.id].completed);
        const totalQuestions = course.quiz.questions.length;
        const disabled = !modulesCompleted || (index > 0 && !isCourseCompleted(state.courses[index - 1])) || totalQuestions === 0;

        let statusText = 'Hazır';
        if (totalQuestions === 0) {
            statusText = 'Hazırlanıyor';
        } else if (quizResult) {
            statusText = quizResult.passed ? 'BAŞARILI' : 'BAŞARISIZ';
        }
        const badgeClass = quizResult ? (quizResult.passed ? 'badge-pass' : 'badge-fail') : '';

        quizCard.innerHTML = `
            <div>
                <h3>${course.quiz.title}</h3>
                <p class="section-description">${course.title} eğitimini pekiştirmek için ${totalQuestions} soruluk quiz.</p>
            </div>
            <div class="quiz-result">
                <span>✅ Doğru: ${quizResult ? quizResult.correct : 0}</span>
                <span>❌ Yanlış: ${quizResult ? quizResult.wrong : 0}</span>
            </div>
            <div class="quiz-actions">
                <span class="${badgeClass}">${statusText}</span>
                <button ${disabled ? 'disabled class="locked"' : ''}>Testi Başlat</button>
            </div>
        `;

        const startButton = quizCard.querySelector('button');
        startButton.addEventListener('click', () => {
            if (disabled) {
                if (totalQuestions === 0) {
                    showToast('Bu quiz henüz hazırlanıyor. Yönetici tarafından sorular eklendiğinde aktif olacaktır.');
                } else {
                    showToast('Quiz açılmadan önce tüm modülleri tamamlayın.', 'error');
                }
                return;
            }
            openQuiz(course);
        });

        grid.appendChild(quizCard);
    });

    renderCertificateBanner();
}

function openQuiz(course) {
    quizModalContent.innerHTML = '';
    const title = document.createElement('h3');
    title.id = 'quizModalTitle';
    title.textContent = course.quiz.title;
    quizModalContent.appendChild(title);

    const form = document.createElement('form');
    course.quiz.questions.forEach((question, qIndex) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'quiz-question';
        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `${qIndex + 1}. ${question.text}`;
        wrapper.appendChild(questionTitle);

        const optionsWrapper = document.createElement('div');
        optionsWrapper.className = 'quiz-options';

        question.options.forEach((option, optionIndex) => {
            const optionId = `${course.id}-${qIndex}-${optionIndex}`;
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `${course.id}-${qIndex}`;
            input.value = optionIndex;
            input.id = optionId;
            label.htmlFor = optionId;
            label.appendChild(input);
            const span = document.createElement('span');
            span.textContent = option;
            label.appendChild(span);
            optionsWrapper.appendChild(label);
        });

        wrapper.appendChild(optionsWrapper);
        form.appendChild(wrapper);
    });

    const footer = document.createElement('div');
    footer.className = 'quiz-footer';
    const info = document.createElement('p');
    info.className = 'section-description';
    info.textContent = 'Geçmek için soruların yarısından fazlasını doğru yanıtlamalısınız.';
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'primary';
    submitButton.textContent = 'Quiz Sonuçlarını Hesapla';
    footer.appendChild(info);
    footer.appendChild(submitButton);
    form.appendChild(footer);

    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        let correct = 0;
        course.quiz.questions.forEach((question, qIndex) => {
            const answer = formData.get(`${course.id}-${qIndex}`);
            if (answer !== null && Number(answer) === question.answer) {
                correct += 1;
            }
        });
        const total = course.quiz.questions.length;
        const wrong = total - correct;
        const passed = correct > total / 2;
        const scorePercent = Math.round((correct / total) * 100);

        state.quizResults[course.id] = {
            correct,
            wrong,
            passed,
            scorePercent
        };

        closeQuizModal();
        showToast(`Quiz tamamlandı. Skorunuz: %${scorePercent}`);
        renderQuizzes();
    });

    quizModalContent.appendChild(form);
    quizModal.setAttribute('aria-hidden', 'false');
    quizModal.classList.add('show');
}

function renderCertificateBanner() {
    const existingBanner = quizView.querySelector('.certificate-banner');
    if (existingBanner) existingBanner.remove();

    const results = state.courses.map(course => state.quizResults[course.id]);
    const allCompleted = results.every(result => result && result.passed);
    const highScores = results.every(result => result && result.scorePercent >= 80);
    const attempts = results.filter(Boolean).length;

    const banner = document.createElement('div');
    banner.className = 'certificate-banner';

    if (results.length === attempts && allCompleted && highScores) {
        banner.innerHTML = `
            <strong>🎉 Sertifika Almaya Hak Kazandınız!</strong>
            <p>Tüm quizlerde %80 ve üzeri başarı gösterdiniz. Sertifikanızı indirerek paylaşabilirsiniz.</p>
            <button type="button" onclick="alert('Sertifikanız indiriliyor...')">Sertifikamı Al</button>
        `;
    } else {
        const average = attempts ? Math.round(results.filter(Boolean).reduce((acc, val) => acc + val.scorePercent, 0) / attempts) : 0;
        banner.innerHTML = `
            <strong>🎯 Sertifika Hedefine Ulaşın</strong>
            <p>Tüm kurs quizlerinden %80 ve üzeri puan alarak sertifikanızı kazanın. Güncel ortalama skorunuz: %${average}</p>
            <span>Eksik quizleri tamamlayın ve tekrar deneyin.</span>
        `;
    }

    quizView.appendChild(banner);
}

function renderPersonalGrowth() {
    personalView.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <div>
            <h2>Kişisel Gelişim</h2>
            <p class="section-description">Kartlara tıklayarak konuya özel okuma içeriklerini görüntüleyin.</p>
        </div>
    `;
    personalView.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'personal-grid';
    personalView.appendChild(grid);

    state.personalDevelopment.forEach(article => {
        const card = document.createElement('article');
        card.className = 'personal-card';
        card.innerHTML = `
            <div class="personal-icon" style="font-size:40px;">${article.icon}</div>
            <h3>${article.title}</h3>
        `;
        card.addEventListener('click', () => {
            renderPersonalReader(article);
        });
        grid.appendChild(card);
    });

    const reader = document.createElement('div');
    reader.className = 'personal-reader';
    reader.innerHTML = `
        <h3>Bir başlık seçin</h3>
        <p class="section-description">Okuma paneli, seçtiğiniz konu başlığının detaylarını burada gösterecektir.</p>
    `;
    personalView.appendChild(reader);
}

function renderPersonalReader(article) {
    const reader = personalView.querySelector('.personal-reader');
    reader.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.body}</p>
    `;
}

function renderFaq() {
    faqView.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <div>
            <h2>Sıkça Sorulan Sorular</h2>
            <p class="section-description">Portal ve İK süreçlerine dair merak edilenler.</p>
        </div>
    `;
    faqView.appendChild(header);

    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    state.faq.forEach((item, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'accordion-item';
        const button = document.createElement('button');
        button.className = 'accordion-button';
        button.innerHTML = `<span>${index + 1}. ${item.question}</span><span>▼</span>`;
        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.style.display = 'none';
        content.textContent = item.answer;

        button.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';
            content.style.display = isOpen ? 'none' : 'block';
            button.querySelector('span:last-child').textContent = isOpen ? '▼' : '▲';
        });

        wrapper.appendChild(button);
        wrapper.appendChild(content);
        accordion.appendChild(wrapper);
    });

    faqView.appendChild(accordion);
}

function renderAnnouncements() {
    announcementView.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <div>
            <h2>Duyurular ve Etkinlikler</h2>
            <p class="section-description">Güncel etkinlik ve duyurularımız.</p>
        </div>
    `;
    announcementView.appendChild(header);

    if (!state.announcements.length) {
        announcementView.insertAdjacentHTML('beforeend', '<div class="empty-state">Henüz bir duyuru bulunmuyor.</div>');
        return;
    }

    const list = document.createElement('div');
    list.className = 'announcement-list';

    state.announcements.forEach(item => {
        const card = document.createElement('article');
        card.className = 'announcement-card';
        card.innerHTML = `
            <div class="announcement-icon">${item.icon}</div>
            <div>
                <h3>${item.title}</h3>
                <p class="section-description">${item.body}</p>
            </div>
        `;
        list.appendChild(card);
    });

    announcementView.appendChild(list);
}

function renderAdminPanel() {
    adminView.innerHTML = '';

    if (!state.isAdmin) {
        const loginCard = document.createElement('div');
        loginCard.className = 'admin-card';
        loginCard.innerHTML = `
            <h3>Yönetici Girişi</h3>
            <p class="section-description">İçerik ekleme, silme ve düzenleme işlemleri yalnızca yönetici hesapları ile yapılabilir.</p>
            <form id="adminLoginForm">
                <input type="text" name="email" placeholder="E-posta" required>
                <input type="password" name="password" placeholder="Şifre" required>
                <button type="submit">Giriş Yap</button>
                ${state.adminLoginError ? `<p class="section-description" style="color: var(--danger);">${state.adminLoginError}</p>` : ''}
            </form>
        `;

        adminView.appendChild(loginCard);

        const form = loginCard.querySelector('#adminLoginForm');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const email = formData.get('email');
            const password = formData.get('password');
            if (email === 'admin@yenilikle.com' && password === 'Egitim2024!') {
                state.isAdmin = true;
                state.adminLoginError = '';
                showToast('Yönetici girişi başarılı.');
                renderAdminPanel();
            } else {
                state.adminLoginError = 'Bilgiler hatalı. Tekrar deneyin.';
                renderAdminPanel();
            }
        });
        return;
    }

    const adminPanel = document.createElement('div');
    adminPanel.className = 'admin-panel';

    adminPanel.appendChild(createCourseManager());
    adminPanel.appendChild(createModuleManager());
    adminPanel.appendChild(createQuizManager());
    adminPanel.appendChild(createPersonalManager());
    adminPanel.appendChild(createAnnouncementManager());
    adminPanel.appendChild(createFaqManager());

    adminView.appendChild(adminPanel);
}

function createCourseManager() {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <h3>Kurs Yönetimi</h3>
        <form id="courseForm">
            <input type="text" name="title" placeholder="Kurs Başlığı" required>
            <textarea name="description" placeholder="Kurs açıklaması" required></textarea>
            <button type="submit">Kurs Ekle</button>
        </form>
        <div class="inline-list">
            ${state.courses.map(course => `<button data-course="${course.id}"><span>${course.title}</span> <i>Sil</i></button>`).join('')}
        </div>
    `;

    const form = card.querySelector('#courseForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        state.courses.push({
            id,
            title,
            description,
            modules: [],
            quiz: { title: `${title} Quiz`, questions: [] }
        });
        state.moduleProgress[id] = {};
        form.reset();
        renderAdminPanel();
        renderOnlineTrainings();
        renderQuizzes();
        showToast('Yeni kurs eklendi.');
    });

    card.querySelectorAll('.inline-list button').forEach(button => {
        button.addEventListener('click', () => {
            const courseId = button.dataset.course;
            const index = state.courses.findIndex(course => course.id === courseId);
            if (index > -1) {
                state.courses.splice(index, 1);
                delete state.moduleProgress[courseId];
                delete state.quizResults[courseId];
                renderAdminPanel();
                renderOnlineTrainings();
                renderQuizzes();
                showToast('Kurs silindi.');
            }
        });
    });

    return card;
}

function createModuleManager() {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <h3>Modül Yönetimi</h3>
        <form id="moduleForm">
            <select name="course" required>
                <option value="">Kurs seçin</option>
                ${state.courses.map(course => `<option value="${course.id}">${course.title}</option>`).join('')}
            </select>
            <input type="text" name="title" placeholder="Modül Başlığı" required>
            <input type="text" name="duration" placeholder="Süre örn. 08:30" required>
            <select name="type" required>
                <option value="video">Video (MP4)</option>
                <option value="youtube">YouTube</option>
            </select>
            <input type="url" name="source" placeholder="Video URL veya YouTube bağlantısı" required>
            <textarea name="summary" placeholder="Modül özeti" required></textarea>
            <button type="submit">Modül Ekle</button>
        </form>
    `;

    const form = card.querySelector('#moduleForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const courseId = formData.get('course');
        const course = state.courses.find(item => item.id === courseId);
        if (!course) return;
        const title = formData.get('title');
        const duration = formData.get('duration');
        const type = formData.get('type');
        const source = formData.get('source');
        const summary = formData.get('summary');
        const moduleId = `${courseId}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        const newModule = {
            id: moduleId,
            title,
            duration,
            type,
            summary
        };

        if (type === 'youtube') {
            const match = source.match(/(?:v=|\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
            newModule.youtubeId = match ? match[1] : source.slice(-11);
        } else {
            newModule.source = source;
        }

        course.modules.push(newModule);
        state.moduleProgress[courseId][moduleId] = { percent: 0, completed: false };
        form.reset();
        renderAdminPanel();
        renderOnlineTrainings();
        showToast('Modül eklendi.');
    });

    return card;
}

function createQuizManager() {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <h3>Quiz Yönetimi</h3>
        <form id="quizForm">
            <select name="course" required>
                <option value="">Kurs seçin</option>
                ${state.courses.map(course => `<option value="${course.id}">${course.title}</option>`).join('')}
            </select>
            <input type="text" name="question" placeholder="Soru metni" required>
            <input type="text" name="option1" placeholder="1. Şık" required>
            <input type="text" name="option2" placeholder="2. Şık" required>
            <input type="text" name="option3" placeholder="3. Şık" required>
            <select name="answer" required>
                <option value="0">1. Şık Doğru</option>
                <option value="1">2. Şık Doğru</option>
                <option value="2">3. Şık Doğru</option>
            </select>
            <button type="submit">Soru Ekle</button>
        </form>
    `;

    const form = card.querySelector('#quizForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const courseId = formData.get('course');
        const course = state.courses.find(item => item.id === courseId);
        if (!course) return;
        course.quiz.questions.push({
            text: formData.get('question'),
            options: [formData.get('option1'), formData.get('option2'), formData.get('option3')],
            answer: Number(formData.get('answer'))
        });
        form.reset();
        renderAdminPanel();
        showToast('Quiz sorusu eklendi.');
    });

    return card;
}

function createPersonalManager() {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <h3>Kişisel Gelişim İçerikleri</h3>
        <form id="personalForm">
            <input type="text" name="title" placeholder="Başlık" required>
            <input type="text" name="icon" placeholder="Emoji (örn. 🔥)" maxlength="2" required>
            <textarea name="body" placeholder="İçerik" required></textarea>
            <button type="submit">İçerik Ekle</button>
        </form>
        <div class="inline-list">
            ${state.personalDevelopment.map(item => `<button data-id="${item.id}"><span>${item.title}</span><i>Sil</i></button>`).join('')}
        </div>
    `;

    const form = card.querySelector('#personalForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get('title');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        state.personalDevelopment.push({
            id,
            title,
            icon: formData.get('icon') || '📘',
            body: formData.get('body')
        });
        form.reset();
        renderAdminPanel();
        renderPersonalGrowth();
        showToast('Yeni kişisel gelişim içeriği eklendi.');
    });

    card.querySelectorAll('.inline-list button').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            state.personalDevelopment = state.personalDevelopment.filter(item => item.id !== id);
            renderAdminPanel();
            renderPersonalGrowth();
            showToast('İçerik silindi.');
        });
    });

    return card;
}

function createAnnouncementManager() {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <h3>Duyuru Yönetimi</h3>
        <form id="announcementForm">
            <input type="text" name="title" placeholder="Duyuru başlığı" required>
            <input type="text" name="icon" placeholder="Emoji (örn. 📣)" maxlength="2" required>
            <textarea name="body" placeholder="Duyuru metni" required></textarea>
            <button type="submit">Duyuru Ekle</button>
        </form>
        <div class="inline-list">
            ${state.announcements.map((item, index) => `<button data-index="${index}"><span>${item.title}</span><i>Sil</i></button>`).join('')}
        </div>
    `;

    const form = card.querySelector('#announcementForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        state.announcements.push({
            title: formData.get('title'),
            icon: formData.get('icon') || '📢',
            body: formData.get('body')
        });
        form.reset();
        renderAdminPanel();
        renderAnnouncements();
        showToast('Duyuru eklendi.');
    });

    card.querySelectorAll('.inline-list button').forEach(button => {
        button.addEventListener('click', () => {
            const index = Number(button.dataset.index);
            state.announcements.splice(index, 1);
            renderAdminPanel();
            renderAnnouncements();
            showToast('Duyuru silindi.');
        });
    });

    return card;
}

function createFaqManager() {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
        <h3>SSS Yönetimi</h3>
        <form id="faqForm">
            <input type="text" name="question" placeholder="Soru" required>
            <textarea name="answer" placeholder="Cevap" required></textarea>
            <button type="submit">Soru Ekle</button>
        </form>
        <div class="inline-list">
            ${state.faq.map((item, index) => `<button data-index="${index}"><span>${item.question}</span><i>Sil</i></button>`).join('')}
        </div>
    `;

    const form = card.querySelector('#faqForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        state.faq.push({
            question: formData.get('question'),
            answer: formData.get('answer')
        });
        form.reset();
        renderAdminPanel();
        renderFaq();
        showToast('Yeni SSS maddesi eklendi.');
    });

    card.querySelectorAll('.inline-list button').forEach(button => {
        button.addEventListener('click', () => {
            const index = Number(button.dataset.index);
            state.faq.splice(index, 1);
            renderAdminPanel();
            renderFaq();
            showToast('SSS maddesi silindi.');
        });
    });

    return card;
}

const supportButton = document.getElementById('openSupport');
if (supportButton) {
    supportButton.addEventListener('click', () => {
        showToast('Destek talebiniz alındı. İK ekibi en kısa sürede sizinle iletişime geçecek.');
    });
}

initProgress();
renderView('online-trainings');
