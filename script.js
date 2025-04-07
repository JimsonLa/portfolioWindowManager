// Afficher la date actuelle
        const now = new Date();
        document.getElementById('current-date').textContent = now.toLocaleDateString('fr-FR');

        // Simuler l'interaction avec les fenêtres
        document.querySelectorAll('.window').forEach(window => {
            window.addEventListener('click', () => {
                document.querySelectorAll('.window').forEach(w => {
                    w.classList.remove('active');
                });
                window.classList.add('active');
            });
        });

        // Assignation des espaces de travail aux fenêtres
        const workspaceWindows = {
            '1: Accueil': 0,      // index de la fenêtre about_me.md
            '2: Projets': 1,      // index de la fenêtre projects.js
            '3: Compétences': 2,  // index de la fenêtre skills.json
            '4: Contact': 3       // index de la fenêtre contact.sh
        };

        // Simuler l'interaction avec les espaces de travail
        document.querySelectorAll('.workspace').forEach(workspace => {
            workspace.addEventListener('click', () => {
                // Activer l'espace de travail
                document.querySelectorAll('.workspace').forEach(w => {
                    w.classList.remove('active');
                });
                workspace.classList.add('active');
                
                // Activer la fenêtre correspondante
                const windowIndex = workspaceWindows[workspace.textContent];
                const windows = document.querySelectorAll('.window');
                windows.forEach(w => {
                    w.classList.remove('active');
                });
                
                if (windowIndex !== undefined && windows[windowIndex]) {
                    windows[windowIndex].classList.add('active');
                    // Faire défiler vers la fenêtre active
                    windows[windowIndex].scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Gestion du formulaire de contact
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            
            // Préparation du contenu de l'email
            const subject = `Message de ${name} via Portfolio`;
            const mailtoBody = `Nom: ${name}`;
            
            // Création de l'URL mailto
            const mailtoLink = `mailto:jlasselin.pro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
            
            // Tentative d'ouverture du client mail
            const mailWindow = window.open(mailtoLink, '_blank');
            
            // Affichage du message de statut
            const statusMessage = document.getElementById('statusMessage');
            statusMessage.style.display = 'block';
            
            if (mailWindow) {
                statusMessage.textContent = 'Votre client de messagerie a été ouvert avec votre message. Cliquez sur envoyer dans votre messagerie pour finaliser.';
                statusMessage.style.color = 'var(--green)';
                
                // Réinitialisation du formulaire
                this.reset();
            } else {
                statusMessage.textContent = 'Impossible d\'ouvrir votre client de messagerie. Veuillez contacter directement à jlasselin.pro@gmail.com';
                statusMessage.style.color = 'var(--red)';
            }
        });