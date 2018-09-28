export default {
  app: {
    title: 'Progression du jeu',
    navigation: {
      dashboard: 'Tableau de bord',
      games: 'Jeux'
    }
  },
  dashboard: {
    title: 'Votre tableau de bord',
    labels: {
      timeRemaining: 'Temps restant',
      days: 'Journées',
      numberOfUnfinishedGames: 'Nombre de parties non terminées',
      numberOfFinishedGames: 'Nombre de parties terminées'
    }
  },
  games: {
    gamesListing: {
      labels: {
        platform: 'Plate-forme',
        completion: 'Achèvement',
        sort: 'Trier',
        search: 'Search',
        estimatedCompleted: 'Est. Terminé',
        completionDate: 'Date d\'achèvement'
      },
      filters: {
        platform: {
          all: 'Tout'
        },
        completion: {
          all: 'Tout',
          complete: 'Achevée',
          notComplete: 'Incomplet'
        },
        sort: {
          priority: 'Priorité',
          dateCreated: 'date créée'
        }
      },
      placeholders: {
        searchText: 'Entrez un nom de jeu ...'
      },
      actions: {
        addGame: 'Ajouter un jeu',
        deleteGames: 'Supprimer les {0} jeux'
      }
    },
    addGame: {
      title: 'Ajouter un jeu',
      actions: {
        save: 'sauvegarder',
        cancel: 'Annuler'
      },
      labels: {
        name: 'prénom',
        imageUrl: 'URL de l\'image',
        platform: 'Plate-forme',
        numberOfHoursToComplete: 'Nombre d\'heures à compléter',
        priority: 'Priorité'
      },
      placeholders: {
        platform: 'Choisissez une plate-forme...',
        priority: 'Choisissez une plate-forme...'
      }
    },
    editGame: {

    }
  },
  profile: {
    profileDetails: {
      title: 'Mon profil',
      actions: {
        edit: 'modifier'
      },
      labels: {
        name: 'prénom',
        language: 'La langue',
        averageNumberOfHoursToGamePerDay: 'Nombre moyen d\'heures de jeu par jour'
      }
    },
    editProfile: {
      title: 'Modifier votre profil',
      actions: {
        save: 'sauvegarder',
        cancel: 'Annuler'
      },
      labels: {
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        language: 'La langue',
        averageNumberOfHoursToGamePerDay: 'Nombre moyen d\'heures de jeu par jour'
      },
      placeholders: {
        language: 'Choisissez une langue...'
      }
    }
  }
};