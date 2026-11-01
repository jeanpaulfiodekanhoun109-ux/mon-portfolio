#include <stdio.h>

struct Employe {
    int matricule;
    char nom[30];
    char prenom[30];
    float salaire;
};

int main() {
    struct Employe tab[100];
    int n, i;

    printf("Combien d'employes ? ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("\nEmploye %d\n", i + 1);

        printf("Matricule : ");
        scanf("%d", &tab[i].matricule);

       printf("Nom : ");
        scanf("%29s", tab[i].nom);

        printf("Prenom : ");
        scanf("%29s", tab[i].prenom);

        printf("Salaire : ");
        scanf("%f", &tab[i].salaire);
    }

    printf("\n--- Liste des employes ---\n");

    for (i = 0; i < n; i++) {
        printf("\nMatricule : %d\n", tab[i].matricule);
        printf("Nom : %s\n", tab[i].nom);
        printf("Prenom : %s\n", tab[i].prenom);
        printf("Salaire : %.2f\n", tab[i].salaire);
    }

    return 0;
}