    <script>
        // Smooth scroll for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Project navigation
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.getAttribute('data-project');
                showProject(projectId);
            });
        });

        function showProject(projectId) {
            document.getElementById('main-page').style.display = 'none';
            document.getElementById('project-' + projectId).classList.add('active');
            window.scrollTo(0, 0);
        }

        function showMainPage(e) {
            e.preventDefault();
            document.getElementById('main-page').style.display = 'block';
            document.querySelectorAll('.project-detail').forEach(detail => {
                detail.classList.remove('active');
            });
            window.scrollTo(0, 0);
        }

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.padding = '1rem 4rem';
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                nav.style.padding = '2rem 4rem';
                nav.style.background = 'rgba(10, 10, 10, 0.8)';
            }
        });
    </script>