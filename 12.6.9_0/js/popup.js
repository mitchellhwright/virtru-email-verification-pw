/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2622:
/***/ ((module, exports, __webpack_require__) => {

__webpack_require__(50154);
module.exports = exports = __webpack_require__(32841);

/***/ }),

/***/ 8561:
/***/ ((module) => {

var __webpack_unused_export__;
/**
 * Emit `event` with the given args and allow
 * the event to be canceled.  In some circumstances
 * a listener of an event may want to signal to the
 * emitter to cancel the event.  This function allows
 * that to happen.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Boolean} Returns false if canceled
 */

__webpack_unused_export__ = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1);
  var callbacks = this._callbacks[event];
  if (callbacks && callbacks.length) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      var result = callbacks[i].apply(this, args);
      result = result === undefined ? true : result;
      if (!result) {
        return false;
      }
    }
  }
  return true;
};

/***/ }),

/***/ 24361:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"ACTIVATION_BUTTON_ACTIVATE":"Activer {{currentUser}}","ACTIVATION_BUTTON_REACTIVATE":"Réactiver {{currentUser}}","ACTIVATION_FAILED":"Échec de l’activation","ACTIVATION_FAILED_GENERAL_BODY":"Impossible d’activer la protection Virtru. Veuillez patienter un instant et réessayer, ou contactez votre administrateur.","ACTIVATION_HEADER_USER_NOT_ACTIVATED":"{{currentUser}} n’est pas activé pour utiliser Virtru","ACTIVATION_LINK":"Fonctionnement","ACTIVATION_MESSAGE_DELEGATION_LINK":"Activer","ACTIVATION_SUBTEXT":"Afin de protéger votre vie privée, nous devons vérifier régulièrement votre identité. Cela ne prend qu’une minute, la réactivation s’effectue en un clic.","ACTIVATION_TEXT_ACTIVATE":"ACTIVER VIRTRU POUR<br>RÉDIGER DES E-MAILS SÉCURISÉS","ACTIVATION_TEXT_REACTIVATE":"RÉACTIVER VIRTRU POUR CONTINUER","ACTIVATION_WAIT_CANCELED":"Virtru n’a pas pu authentifier votre compte de messagerie, car l’onglet d’authentification a été fermé.<br/><br/>Cliquez sur le lien \\"Réessayer\\" ci-dessous pour redémarrer le processus.","ACTIVATION_WAIT_ERROR":"Virtru - Authentification impossible","ACTIVATION_WAIT_FAILED":"Virtru n’a pas pu authentifier votre compte de messagerie, car les paramètres actuels de votre navigateur n’autorisent pas la création de cookies, ou car vous avez rejeté la demande de Virtru de vérifier votre adresse e-mail.</br><br/>Le processus d’authentification requiert des cookies. Si vous avez modifié les paramètres de cookies par défaut de votre navigateur, configurez ce dernier de façon à autoriser tous les cookies, puis cliquez sur le bouton \\"Réessayer\\". Une fois votre compte authentifié, vous pouvez réactiver les limitations de cookies et continuer à utiliser Virtru.</br><br/>Virtru demande l’autorisation \\"Voir votre adresse e-mail\\" à votre fournisseur de messagerie Web afin de vérifier que vous possédez bien le compte que vous activez. Pour plus d’informations sur la façon dont nous utilisons votre adresse e-mail, consultez nos <a href=\\"https://www.virtru.com/terms-of-service\\" target=\\"_blank\\">Conditions de service<a/> et notre <a href=\\"https://www.virtru.com/privacy-policy\\" target=\\"_blank\\">Politique de confidentialité</a>. Cliquez sur le bouton \\"Réessayer\\" pour accorder cette autorisation.","ACTIVATION_WAIT_HEADER":"Virtru - Authentification en cours...","ACTIVATION_WAIT_IN_PRIVATE":"Virtru n’a pas pu authentifier votre compte de messagerie, car votre navigateur est en mode privé, également appelé mode \\"Incognito\\" ou \\"InPrivate\\". Le processus d’authentification requiert des cookies, qui sont limités en mode privé.</br><br/>Pour continuer, désactivez le mode privé, et revenez à votre fenêtre ou onglet de messagerie Web pour redémarrer le processus d’authentification.</br><br/>Une fois votre compte authentifié, vous pouvez réactiver le mode privé et continuer à utiliser Virtru.","ACTIVATION_WAIT_MESSAGE":"Virtru est toujours en train d’authentifier votre compte de messagerie sur ce navigateur. Tant que l’authentification n’est pas terminée, vous ne pouvez pas envoyer ni lire de messages sécurisés.","ANIMATION_WIDGET_LOADING_TEXT":"Déchiffrement de l’e-mail...","ATTACHMENTS_UPLOADING_NO_SEND":"Le téléchargement des pièces jointes doit être terminé avant de lancer l’envoi.","ATTACHMENT_APPID_ERROR_HEADER":"Activation arrivée à expiration","ATTACHMENT_APPID_ERROR_TEXT":"Impossible de télécharger les pièces jointes car votre activation a expiré. Veuillez réactiver et réessayer.","ATTACHMENT_CONNECTION_ERROR_HEADER":"Erreur réseau","ATTACHMENT_CONNECTION_ERROR_TEXT":"Un problème est survenu lors du téléchargement de vos pièces jointes. Vérifiez votre connexion et réessayez.","ATTACHMENT_CONTENT":"Contenu de la pièce jointe","ATTACHMENT_ERROR_CORRUPT":"La pièce jointe est corrompue et ne peut pas être déchiffrée. Demandez à l’expéditeur de renvoyer la pièce jointe.","ATTACHMENT_ERROR_UNAUTHORIZED":"Vous n’êtes pas autorisé à accéder à ce fichier.","ATTACHMENT_ERROR_UNKNOWN":"Une erreur est survenue et Virtru n’a pas pu télécharger ou déchiffrer ce fichier. Veuillez réessayer ultérieurement.","ATTACHMENT_GENERIC_ERROR_BUTTON":"Ignorer","ATTACHMENT_GENERIC_ERROR_HEADER":"Erreur de pièce jointe","ATTACHMENT_GENERIC_ERROR_TEXT":"Un problème est survenu lors du téléchargement de vos pièces jointes. Vérifiez vos fichiers, votre navigateur et votre plug-in avant de réessayer.","ATTACHMENT_INTEGRITY_COMPROMISED":"Virtru ne peut pas déchiffrer cette pièce jointe. Cette situation a généralement lieu lorsque le texte chiffré d’un message a été modifié, ce qui rend le chiffrement illisible.","ATTACHMENT_ERROR_CLOSE_BUTTON":"Fermer","ATTACHMENT_NOT_READY_ERROR":"Pièce jointe non prête","ATTACHMENT_OPTIONS":"Options de pièce jointe","ATTACHMENT_PFP_ERROR_HEADER":"Erreur de pièce jointe","ATTACHMENT_REVOKED_HEADER":"Accès révoqué","ATTACHMENT_REVOKED_TEXT":"Vous n’avez plus l’autorisation d’afficher ce fichier","ATTACHMENT_TOO_LARGE_HEADER":"Pièce jointe trop volumineuse","ATTACHMENT_TOO_LARGE_TEXT":"Certaines pièces jointes sont trop volumineuses pour être chiffrées. Joignez des fichiers d’une taille inférieure à {{maxSizeMb}} Mo.","ATTACHMENT_TOO_LARGE_SUGGEST_SECURE_SHARE_TEXT":"Une ou plusieurs de vos pièces jointes dépassent la taille limite pour le cryptage des e-mails. Veuillez joindre des fichiers de moins de {{maxSizeMb}} Mo ou utiliser Virtru Secure Share pour envoyer des fichiers jusqu\'à {{secureShareMaxSize}} Go à vos destinataires en toute sécurité.","CANNOT_DECRYPT_GET_HELP":"Pour en savoir plus, consultez la FAQ de Virtru.","CANNOT_DECRYPT_HEADER":"Message probablement modifié","CANNOT_DECRYPT_MESSAGE_CKS":"Le serveur de chiffrement {{ownerName}} est inaccessible.<br/>Pour obtenir de l’aide, <a href=\\"{{ownerSupportUrl}}\\">contactez le <br/>support technique {{ownerName}}</a>.","CANNOT_DECRYPT_MESSAGE_CKS_TROUBLE_READING_EMAIL":"Nous ne parvenons pas à lire votre e-mail. Réessayez ultérieurement !","CANNOT_DECRYPT_MESSAGE_INTEGRITY_COMPROMISED":"Virtru a détecté que ce message a peut-être été falsifié. Essayez de demander à <span class=\\"vic-message-bold\\">{{sender}}</span> de renvoyer le message.","CHROME_POPUP_ABOUT_VIRTRU_BUTTON":"À propos de Virtru","CHROME_POPUP_ACTIVATION_BUTTON":"Activer Virtru pour {{userId}}","CHROME_POPUP_ACTIVATION_LABEL":"Protection des e-mails Virtru","CHROME_POPUP_SIGN_OUT_BUTTON":"Se déconnecter","CHROME_POPUP_VIRTRU_CONTROL_CENTER_BUTTON":"Centre de contrôle Virtru","CHROME_POPUP_SUPPORT_BUTTON":"Support technique","CHROME_POPUP_UNINSTALL_BUTTON":"Désinstaller","CHROME_POPUP_DRIVE_CROSS_SELL":"Obtenir Virtru pour Drive","CHROME_POPUP_SECURE_SHARE_CROSS_SELL":"Obtenez Virtru Secure Share pour Drive","COMMON_RETRY_SECURE_SEND":"Réessayer l’envoi sécurisé","COMMON_CANCEL":"Annuler","COMMON_CLOSE":"Fermer","COMMON_OK":"OK","COMMON_SEND":"Envoyer","COMMON_SEND_SECURE":"Sécuriser l\'envoi","COMMON_SEND_SECURE_TOOLTIP_OFFLINE":"Le message protégé ne peut pas être envoyé car Virtru est hors ligne","COMMON_TRY_AGAIN":"Réessayer","COMMON_REFRESH":"actualiser","COMMON_REFRESH_PAGE":"Actualiser la page","COMPOSE_ACTIVATION_REQUIRED":"Activation requise par Virtru","COMPOSE_ATTACHMENTS_UPLOADING_WARN":"Le mode sécurisé ne peut pas être modifié pendant le téléchargement des pièces jointes. Attendez la fin du téléchargement des pièces jointes, puis modifiez le mode sécurisé.","COMPOSE_DRIVE_ATTACHMENTS_UNSUPPORTED":"Virtru ne prend pas en charge les pièces jointes Drive actuellement. Voulez-vous les supprimer ?","COMPOSE_EXPIRES":"Expire {{timeRemaining}}","COMPOSE_INSERT_DRIVE_INSERT_FILE":"L’insertion de fichiers à partir de Google Drive n’est pas prise en charge en mode sécurisé.","COMPOSE_INSERT_PHOTOS_INLINE_IMAGES":"Actuellement, Virtru ne prend pas en charge les images intégrées.","COMPOSE_OFF_CONFIRM_REMOVE":"Si le mode sécurisé est désactivé, toutes les pièces jointes sécurisées seront supprimées. Voulez-vous vraiment effectuer cette opération ?","CONTENT_IS_MANAGED":"L’expéditeur a désactivé le téléchargement pour ce fichier.","CONTEXTUAL_ACTIVATE_INFO":"Le compte {{currentUser}} n’a pas été activé auprès de Virtru. Une fois votre compte activé, votre identité est vérifiée et Virtru vous envoie les clés de déchiffrement de vos messages sécurisés. Virtru n’a jamais accès à votre contenu.","DISMISS_POPOVER_DEFAULT_OPTIONS_TEXT":"Ok, j’ai compris.","DOWNLOAD_ATTACHMENT_DECRYPTING":"Déchiffrement","EMAIL_BODY_CONTENT":"Contenu du corps de l’e-mail","EMAIL_ERROR_EMAIL_CORRUPT":"Ce message est corrompu et ne peut pas être déchiffré. Demandez à l’expéditeur de renvoyer le message.","EMAIL_ERROR_EMAIL_CORRUPT_HEADER":"E-mail corrompu","EMAIL_ERROR_INTERNAL_SERVER_ERROR":"Les serveurs de Virtru n’ont pas répondu. Patientez quelques minutes et réessayez.","EMAIL_ERROR_INTERNAL_SERVER_ERROR_HEADER":"Erreur du serveur","EMAIL_ERROR_NETWORK_LOST":"Virtru n’a pas pu se connecter à Internet. Vérifiez votre connexion Internet et réessayez.","EMAIL_ERROR_NETWORK_LOST_HEADER":"Erreur de connexion réseau","EMAIL_ERROR_READ":"Le message n’a pas pu être déchiffré. Vérifiez votre connexion Internet et réessayez.","EMAIL_ERROR_SEND":"Une erreur est survenue et le message n’a pas pu être envoyé. Vérifiez votre connexion Internet et réessayez.","EMAIL_ERROR_SMART_SEND_SECURE":"Une erreur est survenue lors de la tentative d’envoi de votre message. Si le problème persiste, contactez Virtru.","EMAIL_ERROR_SMART_SEND_SECURE_HEADER":"Erreur d’envoi","EMAIL_ERROR_TEMPLATE_SUPPORT_LINK":"Support technique Virtru","EMAIL_ERROR_UNKNOWN":"Virtru a rencontré une erreur et ne peut pas envoyer ce message. Actualisez la page et réessayez.","EMAIL_ERROR_UNKNOWN_HEADER":"Erreur inconnue","EMAIL_ERROR_YOURE_ON_STAGING":"Attention ! Il semblerait que vous tentiez de lire un e-mail provenant du mauvais serveur (intermédiaire/de production). Consultez la page des options pour connaître le serveur vers lequel vous pointez. Il se peut qu’il s’agisse d’un serveur incorrect.","EMAIL_ERROR_YOURE_ON_STAGING_HEADER":"Attention ! Il semblerait que vous tentiez de lire un e-mail provenant de ","EMAIL_ERROR_SEND_UNKNOWN":"Virtru a rencontré une erreur et ne peut pas envoyer ce message. Cliquez sur le bouton ci-dessous pour tenter un nouvel envoi.","EMAIL_ERROR_SEND_UNKNOWN_HEADER":"Erreur inconnue","EMAIL_ERROR_SEND_REACTIVATION":"Activation expirée, veuillez réactiver pour envoyer votre message.","EMAIL_ERROR_SEND_REACTIVATION_HEADER":"Erreur d’envoi","EMAIL_ERROR_SEND_REACTIVATION_RETRY_BUTTON":"Réactiver et Envoyer","EMAIL_ERROR_READ_SECURE_READER_LABEL":"Cliquez ici pour afficher le message dans le lecteur sécurisé de Virtru","EMAIL_EXPIRATION":"Date d’expiration","EMAIL_INVALID_ADDRESS":"L’adresse \\"{{invalidAddress}}\\" n’a pas été reconnue. Assurez-vous que le format de toutes les adresses est correct.","EMAIL_INVALID_ADDRESS_GENERIC":"Certaines adresses e-mail n’ont pas été reconnues. Assurez-vous que le format de toutes les adresses est correct.","EMAIL_TEMPLATE_FOOTER":"Sécurisé par Virtru","EMAIL_TEMPLATE_SENDER_HEADER":"Votre message, protégé par Virtru","ENCRYPTED_SEARCH_REMINDER_HEADER":"La recherche chiffrée n’apparaîtra pas dans les résultats de recherche.","ENCRYPTED_SEARCH_REMINDER_SUBTEXT":"La recherche dans les corps de messages chiffrés par Virtru n\'est actuellement pas activée. Cliquez ici pour savoir comment activer la recherche chiffrée.","ENHANCEDPDF_DL_DISABLED_TOOLTIP":"L’expéditeur a désactivé le téléchargement pour ce fichier. Cliquez ci-dessous pour afficher le message dans Virtru Secure Reader.","ENHANCEDPDF_DL_DISABLED_TOOLTIP_TITLE":"Protection de PDF améliorée","EXPANDED_WATERMARKING_DL_DISABLED_TOOLTIP_TITLE":"Protection améliorée","FAQ":"FAQ","FEATURE_CHIP_TEXT":"Nouvelle fonctionnalité","FEATURE_ENCRYPTED_SEARCH_FAQ":"En savoir plus grâce à notre FAQ","FEATURE_ENCRYPTED_SEARCH_POPUP_DESCRIPTION":"Afin d’activer la recherche de vos e-mails chiffrés par Virtru, cliquez ci-dessous pour accéder à l’onglet \\"Fonctionnalités\\" de votre centre de contrôle Virtru.","FEATURE_ENCRYPTED_SEARCH_BUTTON":"Aller au centre de contrôle","FEATURE_ENCRYPTED_SEARCH_CANCEL":"Plus tard","FEATURE_ENCRYPTED_SEARCH_DESCRIPTION":["Dans le Centre de contrôle, accédez à l\'onglet Fonctionnalités et activez la recherche.","Ou consultez notre FAQ pour en savoir plus."],"FEATURE_ENCRYPTED_SEARCH_TITLE_TEXT":"Rechercher vos e-mails chiffrés","FEATURE_ENCRYPTED_SEARCH_SUB_TITLE_TEXT":"Activer la recherche de vos e-mails cryptés Virtru","FEATURE_VAULT_BUTTON":"Commencer","FEATURE_VAULT_CANCEL":"Non, merci","FEATURE_VAULT_DESCRIPTION":["Recherchez des e-mails cryptés et décryptez-les directement","Maintenir la sensibilité avec le cryptage Virtru","Facilement détectable par les parties autorisées","Intégré à votre interface Google existante","Contactez un représentant Virtru pour plus d’informations"],"FEATURE_VAULT_TITLE_TEXT":"Rechercher des e-mails Virtru dans Google Vault","FEATURE_VAULT_SUB_TITLE_TEXT":"Ajoutez le package Google Vault à votre chiffrement de bout en bout Virtru","FILE_SIZES":{"BYTES":"o","UNITS":["ko","Mo","Go","To","Po","Eo","Zo","Yo"]},"DELIMITERS":{"DECIMAL":","},"FIRST_TIME_ONBOARD_LINK_ACTIVATE":"Activer","FOOTER_POPOVER_BODY":"Indiquez à vos amis et à vos collègues qu’ils peuvent vous envoyer un e-mail en toute sécurité avec Virtru.","FOOTER_POPOVER_HEADER":"Communiquer en toute confidentialité","FOOTER_POPOVER_REMOVE_SIGNATURE":" Supprimer de ma signature d’e-mail ","FOOTER_PROMO":"Vous devez m’envoyer un e-mail privé ? J’utilise","FOOTER_PROMO_USE":"Virtru","FORWARDING_RESTRICTED":"- Transfert limité","GMAIL_BASIC_MODE_UNSUPPORTED_MAIN":"L’affichage HTML de base de Gmail n’est pas pris en charge","GMAIL_BASIC_MODE_UNSUPPORTED_SUB":"Passez en affichage standard pour utiliser Virtru.","GO_TO_SECURE_SHARE":"Accédez au Secure Share","INTRO_MESSAGE_FOOTER_TEXT":"Le texte présent au-dessus de cette ligne ne sera pas chiffré.","INVITATION_EMAIL_REPLACE_TEXT_DEFAULT":"Il s’agit d’une chaîne de messages sécurisée, protégée par Virtru.","LEARN_MORE":"En savoir plus","LIMITED_ENCRYPTION_BUTTON_CANCEL":"Annuler","LIMITED_ENCRYPTION_BUTTON_OK":"Continuer","LIMITED_ENCRYPTION_CHECKBOX":"Ne plus afficher ce message","LIMITED_ENCRYPTION_HEADER":"Protection limitée","LIMITED_ENCRYPTION_TEXT":"Des fonctionnalités de sécurité supplémentaires telles que la protection persistante et le tatouage numérique ne seront pas appliquées aux pièces jointes suivantes car les types de fichier ne sont pas pris en charge ou car leurs paramètres de sécurité sont gérés indépendamment de ce message :","MESSAGE_OPTIONS":"Options des messages","MOMENT_CALENDAR_POLICY_CONFIG_FULL_DATE":{"lastDay":"[Hier à] LT","lastWeek":"dddd [dernier] [à] LT","nextDay":"[Demain à] LT","nextWeek":"dddd [à] LT","sameDay":"[Aujourd’hui à] LT","sameElse":"dddd Do MMM YYYY [à] LT"},"MOMENT_CALENDAR_RECIPIENT_EXPIRATION":{"lastDay":"[à] LT [hier]","lastWeek":"[à] LT dddd [dernier]","nextDay":"[à] LT [demain]","nextWeek":"[à] LT dddd","sameDay":"[à] LT [aujourd’hui]","sameElse":"[à] LT dddd Do MMM YYYY"},"MOMENT_CALENDAR_SENDER_EXPIRED":{"lastDay":"[hier à] LT","lastWeek":"dddd [dernier] [à] LT","nextDay":"[demain à] LT","nextWeek":"dddd [à] LT","sameDay":"[aujourd’hui à] LT","sameElse":"dddd Do MMM YYYY [à] LT"},"MOMENT_CALENDAR_SENDER_EXPIRING_SOON":{"lastDay":"LT [hier]","lastWeek":"LT dddd [dernier]","nextDay":"LT [demain]","nextWeek":"LT dddd","sameDay":"LT [aujourd’hui]","sameElse":"LT dddd Do MMM YYYY"},"NESTED_MESSAGE_PLACEHOLDER_TEXT_DEFAULT":"Afficher le dernier message sécurisé","NESTED_MESSAGE_PLACEHOLDER_TEXT_LOADING":"Chargement du message sécurisé...","NEW_COMPOSE_ARCHIVE_SEND":"Envoyer +","NEW_COMPOSE_ARCHIVE_SEND_SECURE":"Sécuriser l\'envoi +","NEW_COMPOSE_DISABLED_WHILE_SECURING":"Désactivé pendant la sécurisation du message (et des pièces jointes)","NEW_MESSAGE_NOT_SECURE":"Nouveau message","NEW_FEATURE_POPOVER_PP_BODY":"Grâce à Virtru, vos pièces jointes restent sécurisées une fois qu’elles ont été partagées et téléchargées. <br><br><a href=\'https://support.virtru.com/hc/en-us/articles/360022693153\'>En savoir plus</a> sur cette fonctionnalité, y compris sur l’expérience du destinataire.","NEW_FEATURE_POPOVER_PP_BUTTON":"Ignorer","NEW_FEATURE_POPOVER_PP_LABEL":"Nouveau ! Protection persistante","NEW_MESSAGE_SECURE":"Nouveau message sécurisé","OFFLINE_MODE_MODAL":{"PROTECTION_OFF":{"ACTION":"Fermer","BODY":"La protection Virtru est actuellement désactivée car votre connexion réseau est hors ligne.","TITLE":"Aucun réseau détecté"},"PROTECTION_ON":{"ACTION":"Fermer","BODY":"La protection Virtru est actuellement désactivée car votre connexion réseau est hors ligne. Toute révision effectuée hors ligne ne sera pas enregistrée.","TITLE":"Aucun réseau détecté"}},"OKGOTIT":"OK, J’AI COMPRIS !","ONBOARDING_POPOVER_1_CONFIRM":"Activer","ONBOARDING_POPOVER_1_ENTERPRISE_BODY":"Votre entreprise utilise Virtru pour protéger ses e-mails et la confidentialité de ses données. Pour commencer à envoyer des messages sécurisés, activez votre compte de messagerie.","ONBOARDING_POPOVER_1_HEADER":"Bienvenue sur Virtru","ONBOARDING_POPOVER_1_INDIVIDUAL_BODY":"Avec Virtru, la protection des e-mails et de la confidentialité de vos données est un jeu d’enfant. Pour commencer à envoyer des messages sécurisés, activez votre compte de messagerie.","ONBOARDING_POPOVER_2_BODY":"Vous pouvez désormais envoyer des messages sécurisés depuis {{currentUser}} à l’aide de Virtru.","ONBOARDING_POPOVER_2_CONFIRM":"Suivant","ONBOARDING_POPOVER_2_HEADER":"Votre adresse e-mail est activée.","ONBOARDING_POPOVER_2_SKIP_CHECKBOX_LABEL":"Ne plus afficher","ONBOARDING_POPOVER_3_BODY":"Vous avez changé d’avis ? Révoquez l’accès ou mettez à jour les contrôles à partir de votre dossier Gmail Messages envoyés ou dans le <a href=\'https://secure.virtru.com/control-center\'>centre de contrôle Virtru</a>.","ONBOARDING_POPOVER_3_CONFIRM":"Terminé","ONBOARDING_POPOVER_3_HEADER":"Vous venez d’envoyer votre premier message sécurisé.","ONBOARDING_RESTART_4_BODY":"Virtru protège vos messages et vos pièces jointes. Pour en savoir plus sur la façon dont Virtru vous protège, rendez-vous sur la page <a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>.","ONBOARDING_RESTART_4_ORG_BODY":"La protection Virtru a été définie sur « Activée » par votre administrateur. Elle protègera donc vos messages et vos pièces jointes.<br><br>Pour en savoir plus sur la façon dont Virtru vous protège, rendez-vous sur la page <a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>.","ONBOARDING_RESTART_4_ORG_HEADING":"Protection Virtru","ONBOARDING_RESTART_CONFIRM":"Commencer la visite","ONBOARDING_SEND_VERIFICATION":"Envoyer l’e-mail d’activation","ONBOARDING_TOUR_1_BODY":"Une fois prêt à envoyer un message sécurisé, sélectionnez <span class=\\"bold\\">Rédiger</span> pour commencer.","ONBOARDING_TOUR_1_HEADER":"Commencer à rédiger un message","ONBOARDING_TOUR_2_BODY":"Lorsque vous avez besoin d’envoyer un message sécurisé, activez Virtru en haut à droite de la fenêtre de message. Les brouillons sont également protégés, même avant d’avoir été envoyés.","ONBOARDING_TOUR_2_HEADER":"Activer la protection Virtru","ONBOARDING_TOUR_3_BODY":"Contrôlez l’accès à votre message sécurisé : définissez une date d’expiration, empêchez le transfert ou tatouez numériquement les pièces jointes.","ONBOARDING_TOUR_3_HEADER":"Ajouter des options de sécurité","ONBOARDING_TOUR_4_BODY":"Les messages sécurisés peuvent comporter un texte d’introduction que le destinataire peut lire sans avoir à déchiffrer tout le message. Vous pouvez personnaliser ce texte en sélectionnant <span class=\\"bold\\">Message d’introduction personnel</span>.","ONBOARDING_TOUR_4_HEADER":"Message d’introduction personnel","ONBOARDING_TOUR_CONFIRM":"OK","ONE_CLICK_OPTION":"Accès en un clic","PAGE_ACTIONS_FORMAT_NON_PROD_MESSAGE":"Ce message a été envoyé à l’aide de {{acmUrl}}","PERSONAL_INTRO_ADD":"Message d’introduction personnel","ARIA_PERSONAL_INTRO":"Message d’introduction personnel","PERSONAL_INTRO_ONBOARD":"Ajoutez une présentation personnelle non chiffrée à votre e-mail privé. Les destinataires savent ainsi que le message est authentique et n’est pas un courrier indésirable.","PERSONAL_INTRO_PLACEHOLDER_TEXT":"[Saisissez votre message de présentation ici. Intégrez des informations que seul votre destinataire connaît ou écrivez-les d’une façon qui lui permettra de vous reconnaître.]","PLAINTEXT_NOT_SUPPORTED_HEADER":"Le mode de texte clair n’est pas pris en charge","PLAINTEXT_NOT_SUPPORTED_TEXT":"Désactivez le mode de texte clair avant de continuer.","PLAINTEXT_NOT_SUPPORTED_TITLE":"Échec de l’envoi","POLICY_MENU_DISABLE_FORWARDING":"Désactiver le transfert","POLICY_MENU_EXPANDED_WATERMARKING":"Tatouage numérique","POLICY_MENU_PERSISTENT_PROTECTION":"Protection persistante","POLICY_MENU_WATERMARKING":"Tatouage numérique de PDF","POLICY_MENU_SUPPORTED_FILES_INFO_TITLE":"Formats pris en charge","PROTECTION_REQUIRED":"Protection obligatoire","PROTECT_AND_SEND":"Protéger et envoyer","READ_RECEIPT_FORWARD_COUNT_DETAILS":"(cliquez pour en savoir plus)","RECIPIENT":"Champ du destinataire","RECIPIENT_WIDGET_EXPIRATION_DATE":"Expire {{datetime}}","RECIPIENT_WIDGET_EXPIRED":"Ce message a expiré","RECIPIENT_WIDGET_EXPIRED_BODY":"ACCÈS EXPIRÉ","RECIPIENT_WIDGET_EXPIRED_DATE":"Ce message a expiré le {{datetime}}","RECIPIENT_WIDGET_HEADER":"Vous consultez un message sécurisé, protégé par Virtru.","RECIPIENT_WIDGET_NO_EXPIRATION":"Aucune date d’expiration","RECIPIENT_WIDGET_OFFLINE_BODY":"CONNEXION INTERNET PERDUE","RECIPIENT_WIDGET_OFFLINE_HEADER":"L’accès aux messages sécurisés n’est pas autorisé dans connexion Internet.","RECIPIENT_WIDGET_REVOKED_BODY":"ACCÈS RÉVOQUÉ","RECIPIENT_WIDGET_REVOKED_HEADER":"L’auteur a supprimé votre accès.","RECIPIENT_WIDGET_UNAUTHORIZED_BODY":"CETTE ADRESSE E-MAIL N’EST PAS AUTORISÉE À VISUALISER CET E-MAIL","RECIPIENT_WIDGET_UNAUTHORIZED_HEADER":"Cette adresse e-mail n’est pas autorisée à lire cet e-mail","RESTORE_DRAFT_FAILED":"Un problème est survenu lors de la restauration de ce brouillon. Vérifiez votre connexion réseau et réessayez.","SCREENREADER_CLOSED_POLICY_MENU":"Menu Politique fermé","SCREENREADER_DISABLED_EXPIRATION":"Expiration désactivée","SCREENREADER_DISABLED_FORWARDING":"Transfert désactivé","SCREENREADER_DISABLED_ONECLICK":"Accès en un clic désactivé","SCREENREADER_DISABLED_WATERMARK":"Tatouage numérique désactivé","SCREENREADER_DISABLED_WATERMARK_PDF":"Tatouage numérique du PDF désactivé","SCREENREADER_DISABLED_PFP":"Protection persistante désactivée","SCREENREADER_DISABLE_FORWARDING":"Désactiver le transfert","SCREENREADER_ENABLED_EXPIRATION":"Expiration activée","SCREENREADER_ENABLED_FORWARDING":"Transfert activé","SCREENREADER_ENABLED_ONECLICK":"Accès en un clic activé","SCREENREADER_ENABLED_WATERMARK":"Tatouage numérique activé","SCREENREADER_ENABLED_WATERMARK_PDF":"Tatouage numérique du PDF activé","SCREENREADER_ENABLED_PFP":"Protection persistante activée","SCREENREADER_EXPIRATION":"Expiration définie","SCREENREADER_ONECLICK":"Activer l’accès en un clic","SCREENREADER_OPENED_POLICY_MENU":"Menu Politique ouvert","SCREENREADER_VIRTRU_POLICY_MENU":"Options de sécurité Virtru","SCREENREADER_VIRTRU_SECURE_TOGGLE":"Bouton Sécuriser Virtru","SCREENREADER_WATERMARK_PDF":"Tatouer numériquement le PDF","SCREENREADER_WATERMARK":"Tatouer numériquement","SCREENREADER_PFP":"Protection persistante","SECURE_EMAIL_COMPOSER_PLACEHOLDER_HTML":"La chaîne d’e-mails a été sécurisée par Virtru.","SECURE_EMAIL_COMPOSER_POLICY_OPTIONS_DEFAULT":"(Sans objet)","SECURE_MESSAGE_CONTROL_ENABLE":"Activer","SECURE_MESSAGE_CONTROL_REVOKE":"Révoquer","SECURE_MESSAGE_LABEL":"Vous lisez un message sécurisé","SECURE_MESSAGE_SENT_NOTIFICATION":"Message sécurisé envoyé.","SECURED_ATTACHMENTS_HEADER":"{{count}} PIÈCE JOINTE SÉCURISÉE","SECURED_ATTACHMENTS_HEADER_plural":"{{count}} PIÈCES JOINTES SÉCURISÉES","SENDER_WIDGET_ERROR_ENABLE_MESSAGE":"Une erreur est survenue lors du traitement de l’activation de ce message.","SENDER_WIDGET_ERROR_REVOCATION":"Une erreur est survenue lors du traitement de la révocation.","SENDER_WIDGET_ERROR_UPDATE_POLICY":"Une erreur est survenue lors de la mise à jour de la politique.","SENDER_WIDGET_EXPIRED_DATE":"Arrivé à expiration le {{datetime}}","SENDER_WIDGET_EXPIRES_DATE":"Expire le {{datetime}}","SENDER_WIDGET_MESSAGE_REVOKED":"Ce message a été révoqué","SENDER_WIDGET_NO_EXPIRATION":"Aucune date d’expiration","SENDER_WIDGET_REVOKED_DATE":"Révoqué {{datetime}}","SEND_ANIMATION_LOADING_TEXT":"Chiffrement de l’e-mail","SEND_ANYWAY":"Envoyer quand même","SEND_ANYWAY_OFFLINE":"Placer quand même dans la file d’attente","SCHEDULE_SEND":"Programmer l’envoi","GO_BACK":"Revenir","SEND_BLOCK_HEADER":"Violation détectée","SEND_BLOCK_SUBTEXT":"Conformément à la politique de sécurité du contenu de votre organisation, cet e-mail comprend des informations confidentielles et ne peut pas être envoyé sans protection Virtru.","SEND_WARNING_BUTTON_SEND":"ENVOYER","SEND_WARNING_BUTTON_SEND_SECURE":"ENVOI SÉCURISÉ","SEND_WARNING_BUTTON_SEND_SECURE_IMMEDIATELY":"Effectuer l’envoi sécurisé maintenant","SEND_WARNING_WARNING_SEND_SCHEDULED_LABEL":"Toutefois, l’envoi programmé n’est pas pris en charge avec la protection Virtru pour le moment. Effectuez l’envoi sécurisé maintenant ou enlevez les informations confidentielles pour effectuer un envoi programmé.","SEND_WARNING_SCHEDULE_SEND_NOT_SUPPORTED":"L’envoi programmé n’est pas pris en charge pour le moment. Utilisez l’option Effectuer l’envoi sécurisé maintenant ou envoyez votre e-mail sans protection Virtru.","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE":"Envoi programmé non disponible","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE_TOOLTIP":"L’envoi programmé n’est pas pris en charge avec la protection Virtru pour le moment","SENSITIVE_DATA_FOUND":"Des données confidentielles ont été détectées","WARN_SENSITIVE_DATA_FOUND_BODY":"Le message que vous souhaitez envoyer contient des informations confidentielles. Votre organisation vous recommande d’activer la protection Virtru avant d’envoyer cet e-mail.","WARN_SENSITIVE_DATA_FOUND_BODY_ADDITIONAL_OFFLINE":"Vous pourrez activer la protection pour ce brouillon et l’envoyer lorsque vous aurez récupéré la connectivité réseau, ou vous pouvez placer cet e-mail dans la file d’attente de votre boîte d’envoi sans la protection Virtru.","WARN_SENSITIVE_DATA_FOUND_BODY_OFFLINE":"Le message que vous souhaitez envoyer contient des informations confidentielles.","WARN_SENSITIVE_DATA_FOUND_BODY_MAIL_MERGE":"Cependant, la protection Virtru n\'est pas compatible avec la fusion d\'e-mails dans Gmail. Veuillez sélectionner {{button}} sur cette page et désactiver la fusion d\'e-mails pour continuer.","SENSITIVE_DATA_FOUND_BODY":"Le message que vous souhaitez envoyer contient des informations confidentielles. Votre organisation a automatiquement appliqué la protection Virtru.","SENSITIVE_DATA_FOUND_BODY_OFFLINE":"Le message que vous souhaitez envoyer contient des informations confidentielles.","SENSITIVE_DATA_FOUND_BODY_ADDITIONAL_OFFLINE":"Vous pourrez activer la protection pour ce brouillon et l’envoyer lorsque vous aurez récupéré la connectivité réseau, ou vous pouvez supprimer les informations confidentielles afin de placer cet e-mail dans la file d’attente de votre boîte d’envoi sans la protection Virtru.","WARN_ATTACHMENTS_LIMIT_REACHED":"Nombre maximal de pièces jointes atteint","ATTACHMENTS_LIMIT_REACHED_BODY":"Vous avez joint [ATTACHMENTS_COUNT] fichiers à ce message. La protection Virtru prend en charge jusqu’à [ATTACHMENTS_LIMIT] pièces jointes par message sécurisé. Veuillez retirer [ATTACHMENTS_REMOVE_COUNT] fichiers du message sécurisé, puis réessayez.","TOOLTIP_DISABLE_FORWARDING":"Désactiver le transfert","TOOLTIP_EXPIRATION":"Date d’expiration","TOOLTIP_EXPIRES":"Expire le : {{date}}","TOOLTIP_FORWARDING_RESTRICTED":"Transfert limité","TOOLTIP_FORWARDING_RESTRICTED_CONTENT":"Le transfert a été limité sur un message sécurisé de la chaîne. Il se peut que les destinataires ajoutés à votre message n’aient pas accès au message transféré. Le propriétaire du message sécurisé doit accorder l’accès aux nouveaux destinataires.","TOOLTIP_ONE_CLICK":"Accès en un clic","TOOLTIP_REAUTHORIZE_BUTTON_CONTENT":"Ce message a été révoqué auparavant. Si vous le réautorisez, il sera à nouveau visible.","TOOLTIP_REAUTHORIZE_BUTTON_TITLE":"Réautoriser le message","TOOLTIP_RECIPIENT_DISABLE_FORWARDING":"Ce message sécurisé par Virtru fait l’objet de limitations de transfert par son expéditeur.","TOOLTIP_RECIPIENT_EXPIRATION":"Ce message sécurisé par Virtru expire le {{date}}. Pour visualiser ce message après son expiration, contactez l’expéditeur.","TOOLTIP_RECIPIENT_ONE_CLICK":"Vous n’avez pas besoin d’une autorisation pour lire ce message sécurisé Virtru.","TOOLTIP_RECIPIENT_UNAUTHORIZED_INFO":"L’auteur d’origine de cet e-mail a limité l’accès au message. Par conséquent, si vous n’avez pas reçu ce message directement de l’auteur d’origine, vous ne pourrez peut-être pas visualiser son contenu.<br><br>Pour obtenir l’accès, contactez l’auteur d’origine.","TOOLTIP_REVOKE_BUTTON_CONTENT":"Désactive l’accès à votre message. À part vous, personne ne pourra visualiser ce message.","TOOLTIP_REVOKE_BUTTON_TITLE":"Révoquer le message","TOOLTIP_SECURE_ATTACHMENT_CONTENT":"{{filename}} a été sécurisé par Virtru","TOOLTIP_SECURE_ATTACHMENT_DOWNLOAD":"Déchiffrer et télécharger","TOOLTIP_SECURE_ATTACHMENT_DRIVE":"L’enregistrement sur Google Drive n’est pas pris en charge par Virtru","TOOLTIP_SECURE_ATTACHMENT_TITLE":"Pièce jointe sécurisée Virtru","TOOLTIP_SENDER_DISABLE_FORWARDING_CONTENT":"Ce paramètre permet de rendre votre message illisible s’il a été transféré","TOOLTIP_SENDER_ENABLE_SMS2FA":"L\'accès à ce message nécessitera une vérification par SMS","TOOLTIP_SENDER_EXPIRATION_CONTENT":"Une fois le temps que vous avez indiqué écoulé, vos destinataires n’auront plus accès à ce message","TOOLTIP_SENDER_ONE_CLICK_CONTENT":"Si vous activez cette option, les utilisateurs n’auront pas besoin de s’authentifier pour visualiser votre message chiffré","TOOLTIP_TOGGLE_DISABLED":"Vous n’êtes pas autorisé à effectuer un envoi sécurisé. Contactez votre administrateur si vous avez des questions.","TOOLTIP_TOGGLE_ON":"La protection Virtru est activée","TOOLTIP_TOGGLE_ON_ORG":"La protection Virtru est activée par défaut. Vous pouvez la désactiver si vous n’en avez pas besoin.","TOOLTIP_SENDER_WATERMARK":"Tatouage numérique","TOOLTIP_SENDER_WATERMARK_CONTENT":"Les pièces jointes prises en charge seront tatouées numériquement dans Secure Reader.","TOOLTIP_SENDER_PFP":"Protection persistante","TOOLTIP_SENDER_PFP_CONTENT":"Ce paramètre protège les fichiers en rendant l’authentification obligatoire, même en cas de partage ou de téléchargement sur un ordinateur","TOOLTIP_TOGGLE_OFF":"Protégez votre message avec Virtru","TOOLTIP_TOGGLE_OFF_OFFLINE":"La protection Virtru ne peut pas être activée en mode hors-ligne","TOOLTIP_UPSELL_POSTFIX":"<br/><br/>Cette fonctionnalité est disponible dans la version Pro de Virtru.","TOOLTIP_VIRTRU_OPTIONS":"Options de sécurité","UNSECURE_ATTACHMENTS_EXIST_HEADER":"Présence de pièces jointes non sécurisées","UNSECURE_ATTACHMENTS_EXIST_TEXT":"Envoi sécurisé impossible si des pièces jointes sont détectées.","UNSECURE_ATTACHMENTS_EXIST_TITLE":"Échec de l’envoi","UPDATE_MODAL_HEADER":"Virtru a été mis à jour.","UPDATE_MODAL_REFRESH_BUTTON":"Cliquez ici pour actualiser la page","UPDATE_MODAL_SUBHEADER":"Actualisez cette page pour vous assurer <br>que vous utilisez la dernière version.","VIRTRU_ATTACHMENT_DECRYPTING":"Déchiffrement","VIRTRU_ATTACHMENT_DOWNLOAD":"Télécharger","VIRTRU_ATTACHMENT_VIEW":"Visualiser","VIRTRU_ATTACHMENT_REMOVE":"Supprimer","VIRTRU_AUTH_LINK":"Activer Virtru","VIRTRU_AUTH_LINK_REACTIVATE":"Réactiver Virtru","VIRTRU_CONTACT_US":"Contactez votre administrateur informatique","VIRTRU_DISABLED_ON_DOMAIN":"Virtru a été désactivé pour votre domaine","VIRTRU_PROTECTION_NOT_AUTH":"Virtru doit être activé pour que la protection soit effective.","VIRTRU_PROTECTION_NOT_AUTH_OFFLINE":"Une connexion réseau est requise pour l’activation de Virtru.","VIRTRU_PROTECTION_NOT_AUTH_SHORT":"Veuillez activer Virtru.","VIRTRU_PROTECTION_ON":"Protection Virtru activée","VIRTRU_PROTECTION_OFF":"Protection Virtru désactivée","VIRTRU_PROTECTION_OFFLINE":"La protection Virtru est hors ligne","VIRTRU_SECURE_DRAFT_PREFIX":"Il s’agit d’un brouillon sécurisé par Virtru","WEBMAIL_PLUGIN_ACTIVATION_LINK_RETRY":"Renvoyer","WEBMAIL_PLUGIN_ACTIVATION_TEXT":"E-mail de vérification envoyé.<br>Consultez cette boîte de réception d’ici peu.","WEBMAIL_PLUGIN_INIT_ERROR":"Initialisation de Virtru impossible. Cela peut être dû à des erreurs de connectivité réseau ou à une configuration utilisateur incomplète. Essayez d’actualiser la page dans quelques instants ou contactez le support client Virtru sur la page <a href=\\"https://support.virtru.com/hc/en-us/\\">https://support.virtru.com/hc/en-us/</a>.","WEBMAIL_PLUGIN_INIT_ERROR_HEADER":"Échec de l’initialisation du plug-in Virtru","WIDGET_BASE_BODY_REVOKED":"ACCÈS REFUSÉ","WIDGET_BASE_EXPIRATION_OPTIONS_CUSTOM":"Ajouter une date/heure personnalisée","WIDGET_BASE_FOOTER":"Sécurisé par la technologie Virtru","WIDGET_BASE_HEADER_MESSAGE_RECIPIENT":"Vous consultez un message sécurisé, protégé par Virtru.","WIDGET_BASE_HEADER_MESSAGE_SENDER":"Votre message, protégé par Virtru","WIDGET_BASE_MENU_OPTION_EXPIRES":"Ajouter une expiration","WIDGET_BASE_MENU_OPTION_FORWARDING":"Désactiver le transfert","EXPIRATION_UNIT_DAYS":"jour","EXPIRATION_UNIT_DAYS_plural":"jours","EXPIRATION_UNIT_HOURS":"heure","EXPIRATION_UNIT_HOURS_plural":"heures","EXPIRATION_UNIT_MINS":"minute","EXPIRATION_UNIT_MINS_plural":"minutes","EXPIRATION_UNIT_MONTHS":"mois","EXPIRATION_UNIT_MONTHS_plural":"mois","EXPIRATION_UNIT_WEEKS":"semaine","EXPIRATION_UNIT_WEEKS_plural":"semaines","EXPIRATION_UNIT_YEARS":"an","EXPIRATION_UNIT_YEARS_plural":"ans","READ_RECEIPT_READBY_COUNT":"Lu par {{accessors}} destinataire sur {{count}}","READ_RECEIPT_READBY_COUNT_plural":"Lu par {{accessors}} destinataires sur {{count}}","READ_RECEIPT_FORWARD_COUNT":"<div style=\\"text-align:center;\\">Transféré {{count}} fois<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","READ_RECEIPT_FORWARD_COUNT_plural":"<div style=\\"text-align:center;\\">Transféré {{count}} fois<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","ATTACHMENTS_TOOLTIP_CONTENT":{"RECIPIENT":{"SUPPORTED_FILE":{"NONE_SECURE":"Ce fichier est chiffré sans aucune autre option de sécurité activée.","EXPANDED_WATERMARKING":"Ce fichier sera tatoué numériquement lorsqu’il sera visualisé dans Virtru Secure Reader.","IS_MANAGED":"Ce fichier sera tatoué numériquement lorsqu’il sera visualisé dans Virtru Secure Reader.","EXPANDED_IS_MANAGED":"D’autres options de sécurité sont activées sur ce fichier. Il sera tatoué numériquement et restera sécurisé une fois téléchargé ou partagé.","PERSISTENT_PROTECTION":"La protection persistante est activée sur ce fichier. Celui-ci restera sécurisé une fois téléchargé ou partagé.","EXPANDED_PROTECTION":"D’autres options de sécurité sont activées sur ce fichier. Il sera tatoué numériquement et restera sécurisé une fois téléchargé ou partagé."},"UNSUPPORTED_FILE":{"NONE_SECURE":"Ce fichier est chiffré sans aucune autre option de sécurité activée.","EXPANDED_WATERMARKING":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","IS_MANAGED":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","EXPANDED_IS_MANAGED":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","PERSISTENT_PROTECTION":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","EXPANDED_PROTECTION":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge."},"STEPCHILD":"Cette pièce jointe est dotée de paramètres de sécurité gérés indépendamment de ce message."},"SENDER":{"SUPPORTED_FILE":{"NONE_SECURE":"Ce fichier est chiffré sans aucune autre option de sécurité activée.","EXPANDED_WATERMARKING":"<p>Options de sécurité supplémentaires :</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Tatouage numérique</p>","IS_MANAGED":"<p>Options de sécurité supplémentaires :</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Tatouage numérique de PDF</p>","EXPANDED_IS_MANAGED":"<p>Options de sécurité supplémentaires :</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Tatouage numérique de PDF</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Protection persistante</p>","PERSISTENT_PROTECTION":"<p>Options de sécurité supplémentaires :</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Protection persistante</p>","EXPANDED_PROTECTION":"<p>Options de sécurité supplémentaires :</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Tatouage numérique</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Protection persistante</p>"},"UNSUPPORTED_FILE":{"NONE_SECURE":"Ce fichier est chiffré sans aucune autre option de sécurité activée.","EXPANDED_WATERMARKING":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","IS_MANAGED":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","EXPANDED_IS_MANAGED":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","PERSISTENT_PROTECTION":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge.","EXPANDED_PROTECTION":"Aucune protection supplémentaire activée en raison d’un format de fichier non pris en charge."},"STEPCHILD":"Cette pièce jointe est dotée de paramètres de sécurité gérés indépendamment de ce message."}},"ATTACHMENT_SECTION_TOOLTIP_TITLE":"Pièces jointes sécurisées","ATTACHMENT_SECTION_TOOLTIP_CONTENT":"Les pièces jointes ci-dessous sont chiffrées par Virtru. Les fichiers avec l’icône en forme de verrou sont ceux pour lesquels la protection persistante est activée. Ils restent protégés après avoir été partagés ou téléchargés.","ERROR_REFRESH_TOAST_MESSAGE":"Virtru a rencontré une erreur et risque de ne pas fonctionner correctement. Veuillez actualiser la page pour continuer.","REATTACH_FILE_WARNING_MESSAGE_POP_IN":"Vous devrez joindre votre fichier à nouveau. Voulez-vous afficher quand même ?","REATTACH_FILE_WARNING_MESSAGE_POP_OUT":"Vous devrez joindre votre fichier à nouveau. Voulez-vous masquer quand même ?","CKS_INDICATOR_TITLE":"Identité vérifiée","CKS_INDICATOR_BODY":"Identité de l’expéditeur vérifiée par Virtru à des fins de prévention de la fraude.","CKS_INDICATOR_LINK":"En savoir plus","MAIL_MERGE_CONFLICT_MODAL_TITLE":"Conflit de fusion d\'e-mails","MAIL_MERGE_CONFLICT_MODAL_BODY":"La protection Virtru n\'est pas compatible avec la fusion d\'e-mails dans Gmail. Veuillez désactiver la fusion d\'e-mails pour continuer.","MAIL_MERGE_CONFLICT_TOOLTIP":"La fusion d\'e-mails n\'est pas prise en charge avec la protection Virtru"}');

/***/ }),

/***/ 25026:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"ACTIVATION_BUTTON_ACTIVATE":"Activate {{currentUser}}","ACTIVATION_BUTTON_REACTIVATE":"Reactivate {{currentUser}}","ACTIVATION_FAILED":"Activation failed","ACTIVATION_FAILED_GENERAL_BODY":"We were unable to activate Virtru protection. Please wait a moment and try again or contact your administrator.","ACTIVATION_HEADER_USER_NOT_ACTIVATED":"{{currentUser}} is not activated to use Virtru","ACTIVATION_LINK":"How it works","ACTIVATION_MESSAGE_DELEGATION_LINK":"Activate","ACTIVATION_SUBTEXT":"To protect your privacy, we periodically need to verify your identity. It just takes a minute, just click to reactivate.","ACTIVATION_TEXT_ACTIVATE":"ACTIVATE VIRTRU TO<br>COMPOSE SECURE EMAILS","ACTIVATION_TEXT_REACTIVATE":"REACTIVATE VIRTRU TO CONTINUE","ACTIVATION_WAIT_CANCELED":"Virtru was unable to authenticate your email account because the authentication tab was closed.<br/><br/>Click the \'Try Again\' link below to restart the process","ACTIVATION_WAIT_ERROR":"Virtru - Could Not Authenticate","ACTIVATION_WAIT_FAILED":"Virtru was unable to authenticate your email account because your current browser settings do not allow cookies to be created, or because you denied Virtru\'s request to verify your email address.</br><br/>The authentication process requires cookies. If you have changed your browser\'s default cookie settings, please configure your browser to allow all cookies, then click the \\"Try Again\\" button. When your account has been authenticated, you may reactivate the cookie restrictions and continue to use Virtru.</br><br/>Virtru requests the \\"See your email address\\" permission from your webmail provider to verify that you own the account you are activating. For more information about how we use your email address, please see our <a href=\\"https://www.virtru.com/terms-of-service\\" target=\\"_blank\\">Terms of Service<a/> and <a href=\\"https://www.virtru.com/privacy-policy\\" target=\\"_blank\\">Privacy Policy</a>. Please click the \\"Try Again\\" button to grant this permission.","ACTIVATION_WAIT_HEADER":"Virtru - Authenticating...","ACTIVATION_WAIT_IN_PRIVATE":"Virtru was unable to authenticate your email account because your browser is in private mode, also known as \\"incognito\\" or \\"InPrivate\\" mode. The authentication process requires cookies, which are restricted in private mode.</br><br/>To continue, please disable private mode and return to your webmail window or tab to restart the authentication process.</br><br/>When your account has been authenticated, you may re-enable private mode and continue to use Virtru.","ACTIVATION_WAIT_MESSAGE":"Virtru is still authenticating your email account on this browser. Until you complete authentication, you will not be able to send or read secure messages.","ANIMATION_WIDGET_LOADING_TEXT":"Decrypting Email...","ATTACHMENTS_UPLOADING_NO_SEND":"Uploading attachments must complete before being able to send.","ATTACHMENT_APPID_ERROR_HEADER":"Activation expired","ATTACHMENT_APPID_ERROR_TEXT":"Your attachments cannot be uploaded because your activation has expired. Please reactivate and try again.","ATTACHMENT_CONNECTION_ERROR_HEADER":"Network error","ATTACHMENT_CONNECTION_ERROR_TEXT":"There was a problem uploading your attachments. Please check your connection and try again.","ATTACHMENT_CONTENT":"Attachment Content","ATTACHMENT_ERROR_CORRUPT":"The attachment is corrupt and cannot be decrypted. Please ask the sender to resend the attachment.","ATTACHMENT_ERROR_UNAUTHORIZED":"You are not authorized to have access to this file.","ATTACHMENT_ERROR_UNKNOWN":"An error has occurred and Virtru is unable to download or decrypt this file. Please try again later.","ATTACHMENT_GENERIC_ERROR_BUTTON":"Dismiss","ATTACHMENT_GENERIC_ERROR_HEADER":"Attachment error","ATTACHMENT_GENERIC_ERROR_TEXT":"There was a problem uploading your attachments. Please check your files, browser, and plugin before trying again.","ATTACHMENT_INTEGRITY_COMPROMISED":"Virtru cannot decrypt this attachment.\\n\\nThis situation usually occurs when a message\'s ciphertext has been modified, thus making the encryption unreadable.","ATTACHMENT_ERROR_CLOSE_BUTTON":"Close","ATTACHMENT_NOT_READY_ERROR":"Attachment not ready","ATTACHMENT_OPTIONS":"Attachment Options","ATTACHMENT_PFP_ERROR_HEADER":"Attachment Error","ATTACHMENT_REVOKED_HEADER":"Access Revoked","ATTACHMENT_REVOKED_TEXT":"You no longer have permission to view this file","ATTACHMENT_TOO_LARGE_HEADER":"Attachment too large","ATTACHMENT_TOO_LARGE_TEXT":"One or more of your attachments was too large to be encrypted. Please attach files that are under {{maxSizeMb}} MB.","ATTACHMENT_TOO_LARGE_SUGGEST_SECURE_SHARE_TEXT":"One or more of your attachments exceeds size limit for email encryption. Please attach files under {{maxSizeMb}} MB, or use Virtru Secure Share to send files up to {{secureShareMaxSize}} GB to your recipients securely.","CANNOT_DECRYPT_GET_HELP":"Learn more about this in Virtru\'s FAQ.","CANNOT_DECRYPT_HEADER":"Possibly Altered Message","CANNOT_DECRYPT_MESSAGE_CKS":"The {{ownerName}} encryption server is unreachable.<br/>For help, <a href=\\"{{ownerSupportUrl}}\\">contact the<br/>{{ownerName}} support desk</a>.","CANNOT_DECRYPT_MESSAGE_CKS_TROUBLE_READING_EMAIL":"We\'re having trouble reading your email. Try again later!","CANNOT_DECRYPT_MESSAGE_INTEGRITY_COMPROMISED":"Virtru has detected that this message may have been tampered with. Try asking <span class=\\"vic-message-bold\\">{{sender}}</span> to resend the message.","CHROME_POPUP_ABOUT_VIRTRU_BUTTON":"About Virtru","CHROME_POPUP_ACTIVATION_BUTTON":"Activate Virtru for {{userId}}","CHROME_POPUP_ACTIVATION_LABEL":"Virtru Email Protection","CHROME_POPUP_SIGN_OUT_BUTTON":"Sign Out","CHROME_POPUP_VIRTRU_CONTROL_CENTER_BUTTON":"Control Center","CHROME_POPUP_SUPPORT_BUTTON":"Support","CHROME_POPUP_UNINSTALL_BUTTON":"Uninstall","CHROME_POPUP_DRIVE_CROSS_SELL":"Get Virtru for Drive","CHROME_POPUP_SECURE_SHARE_CROSS_SELL":"Get Virtru Secure Share for Drive","COMMON_RETRY_SECURE_SEND":"Retry Secure Send","COMMON_CANCEL":"Cancel","COMMON_CLOSE":"Close","COMMON_OK":"OK","COMMON_SEND":"Send","COMMON_SEND_SECURE":"Secure Send","COMMON_SEND_SECURE_TOOLTIP_OFFLINE":"Protected message cannot be sent because Virtru is offline","COMMON_TRY_AGAIN":"Try Again","COMMON_REFRESH":"refresh","COMMON_REFRESH_PAGE":"Refresh Page","COMPOSE_ACTIVATION_REQUIRED":"Virtru requires activation","COMPOSE_ATTACHMENTS_UPLOADING_WARN":"Secure mode cannot be toggled while attachments are uploading.  Please wait until attachments are finished uploading and then toggle secure mode.","COMPOSE_DRIVE_ATTACHMENTS_UNSUPPORTED":"Virtru does not currently support Drive attachments. Would you like to remove them?","COMPOSE_EXPIRES":"Expires {{timeRemaining}}","COMPOSE_INSERT_DRIVE_INSERT_FILE":"Inserting files from Google Drive is not supported in secure mode.","COMPOSE_INSERT_PHOTOS_INLINE_IMAGES":"Currently, Virtru does not support inline images.","COMPOSE_OFF_CONFIRM_REMOVE":"If secure mode is turned off all secure attachments will be removed.  Are you sure you want to do this?","CONTENT_IS_MANAGED":"The sender has disabled download for this file.","CONTEXTUAL_ACTIVATE_INFO":"The account {{currentUser}} has not been activated with Virtru.  Once activated, your identity is verified and Virtru sends you the keys to decrypt your secure messages.  Virtru never has access to any of your content.","DISMISS_POPOVER_DEFAULT_OPTIONS_TEXT":"Ok, got it.","DOWNLOAD_ATTACHMENT_DECRYPTING":"Decrypting","EMAIL_BODY_CONTENT":"Email Body Content","EMAIL_ERROR_EMAIL_CORRUPT":"The message is corrupt and cannot be decrypted. Please ask the sender to resend the message.","EMAIL_ERROR_EMAIL_CORRUPT_HEADER":"Email Corrupt","EMAIL_ERROR_INTERNAL_SERVER_ERROR":"Virtru\'s servers did not respond. Please wait a few minutes and try again.","EMAIL_ERROR_INTERNAL_SERVER_ERROR_HEADER":"Server Error","EMAIL_ERROR_NETWORK_LOST":"Virtru could not connect to the internet. Please check your internet connection and try again.","EMAIL_ERROR_NETWORK_LOST_HEADER":"Network Connection Error","EMAIL_ERROR_READ":"The message could not be decrypted. Please check your internet connection and try again.","EMAIL_ERROR_SEND":"An error occurred and the message could not be sent. Please check your internet connection and try again.","EMAIL_ERROR_SMART_SEND_SECURE":"An error occurred when attempting to send your message. Please contact Virtru if the problem persists.","EMAIL_ERROR_SMART_SEND_SECURE_HEADER":"Error Sending","EMAIL_ERROR_TEMPLATE_SUPPORT_LINK":"Virtru Support","EMAIL_ERROR_UNKNOWN":"Virtru has encountered an error and is unable to send this message. Please refresh this page and try again.","EMAIL_ERROR_UNKNOWN_HEADER":"Unknown Error","EMAIL_ERROR_YOURE_ON_STAGING":"Whoa there cowboy... looks like you\'re trying to get tricky and read an e-mail from the wrong server (staging/production). Check the options page to see which server you\'re pointing to.. you might just be pointing to the wrong one.","EMAIL_ERROR_YOURE_ON_STAGING_HEADER":"Whoa there cowboy... looks like you\'re trying to get tricky and read an e-mail from the ","EMAIL_ERROR_SEND_UNKNOWN":"Virtru has encountered an error and is unable to send this message. Click the button below to try sending again.","EMAIL_ERROR_SEND_UNKNOWN_HEADER":"Unknown error","EMAIL_ERROR_SEND_REACTIVATION":"Activation expired, please reactivate to send your message.","EMAIL_ERROR_SEND_REACTIVATION_HEADER":"Error Sending","EMAIL_ERROR_SEND_REACTIVATION_RETRY_BUTTON":"Reactivate and Send","EMAIL_ERROR_READ_SECURE_READER_LABEL":"Click here to view the message in Virtru\'s Secure Reader","EMAIL_EXPIRATION":"Expiration Date","SMS_REQUIRE":"Require SMS","SMS_PHONE_INPUT_LABEL":"Input phone number","SMS_ERROR_WRONG_NUMBER":"Wrong or empty phone number","SMS_NO_RECIPIENTS":"No recipients","POLICY_MENU_ERROR":"Wrong or empty phone number for SMS two-factor authentication option","EMAIL_INVALID_ADDRESS":"The address \\"{{invalidAddress}}\\" was not recognized. Please make sure that all addresses are properly formed.","EMAIL_INVALID_ADDRESS_GENERIC":"One or more email addresses were not recognized. Please make sure that all addresses are properly formed.","EMAIL_ADDRESS_NOT_FOUND":"Please specify at least one recipient.","EMAIL_TEMPLATE_FOOTER":"Secured by Virtru","EMAIL_TEMPLATE_SENDER_HEADER":"Your message, protected by Virtru","ENCRYPTED_SEARCH_REMINDER_HEADER":"Encrypted Search will not appear in your search results.","ENCRYPTED_SEARCH_REMINDER_SUBTEXT":"Searching of Virtru-encrypted message bodies is not currently enabled. Click here to learn how to enable Encrypted Search.","ENHANCEDPDF_DL_DISABLED_TOOLTIP":"The sender has disabled download for this file. Click below to view it in Virtru\'s Secure Reader.","ENHANCEDPDF_DL_DISABLED_TOOLTIP_TITLE":"Enhanced PDF Protection","EXPANDED_WATERMARKING_DL_DISABLED_TOOLTIP_TITLE":"Enhanced Protection","FAQ":"FAQ","FEATURE_CHIP_TEXT":"New Feature","FEATURE_ENCRYPTED_SEARCH_FAQ":"Learn more in our FAQ","FEATURE_ENCRYPTED_SEARCH_POPUP_DESCRIPTION":"To enable search for your Virtru-encrypted emails, click below to go to the \'Features\' tab of your Virtru Control Center.","FEATURE_ENCRYPTED_SEARCH_BUTTON":"Go To Control Center","FEATURE_ENCRYPTED_SEARCH_CANCEL":"Later","FEATURE_ENCRYPTED_SEARCH_DESCRIPTION":["In Control Center, go to Features tab and enable search.","Or, go to our FAQ to learn more."],"FEATURE_ENCRYPTED_SEARCH_TITLE_TEXT":"Search Your Encrypted Emails","FEATURE_ENCRYPTED_SEARCH_SUB_TITLE_TEXT":"Enable search for your Virtru-encrypted emails","FEATURE_VAULT_BUTTON":"Get Started","FEATURE_VAULT_CANCEL":"No Thanks","FEATURE_VAULT_DESCRIPTION":["Search encrypted emails and decrypt them directly","Maintain sensitivity with Virtru encryption","Easily discoverable by authorized parties","Integrated into your existing Google interface","Contact a Virtru representative for more information."],"FEATURE_VAULT_SUB_TITLE_TEXT":"Add the Google Vault package to your Virtru end-to-end encryption","FEATURE_VAULT_TITLE_TEXT":"Search Virtru Emails in Google Vault","FILE_SIZES":{"BYTES":"b","UNITS":["Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"]},"DELIMITERS":{"DECIMAL":"."},"FIRST_TIME_ONBOARD_LINK_ACTIVATE":"Activate","FOOTER_POPOVER_BODY":"Let your friends and colleagues know they can email you securely with Virtru.","FOOTER_POPOVER_HEADER":"Communicate Privately","FOOTER_POPOVER_REMOVE_SIGNATURE":" Remove from my email signature ","FOOTER_PROMO":"Need to send me private email? I use","FOOTER_PROMO_USE":"Virtru","FORWARDING_RESTRICTED":"- Forwarding Restricted","GMAIL_BASIC_MODE_UNSUPPORTED_MAIN":"Gmail\'s basic HTML view not supported","GMAIL_BASIC_MODE_UNSUPPORTED_SUB":"Please switch to standard view to use Virtru.","GO_TO_SECURE_SHARE":"Go to Secure Share","INTRO_MESSAGE_FOOTER_TEXT":"Text above this line will not be encrypted.","INVITATION_EMAIL_REPLACE_TEXT_DEFAULT":"This is a secure message chain, protected by Virtru.","LEARN_MORE":"Learn More","LIMITED_ENCRYPTION_BUTTON_CANCEL":"Cancel","LIMITED_ENCRYPTION_BUTTON_OK":"Continue","LIMITED_ENCRYPTION_CHECKBOX":"Don\'t show me again","LIMITED_ENCRYPTION_HEADER":"Limited Protection","LIMITED_ENCRYPTION_TEXT":"Additional security features such as Persistent Protection and Watermarking will not be applied to the following attachments because the file types are either unsupported or have security settings managed separately from this message:","MESSAGE_OPTIONS":"Message Options","MOMENT_CALENDAR_POLICY_CONFIG_FULL_DATE":{"lastDay":"[Yesterday @] LT","lastWeek":"[Last] dddd [@] LT","nextDay":"[Tomorrow @] LT","nextWeek":"dddd [@] LT","sameDay":"[Today @] LT","sameElse":"dddd[,] MMM Do[,] YYYY [@] LT"},"MOMENT_CALENDAR_RECIPIENT_EXPIRATION":{"lastDay":"[at] LT [yesterday]","lastWeek":"[at] LT [last] dddd","nextDay":"[at] LT [tomorrow]","nextWeek":"[at] LT [on] dddd","sameDay":"[at] LT [today]","sameElse":"[at] LT [on] dddd[,] MMM Do[,] YYYY"},"MOMENT_CALENDAR_SENDER_EXPIRED":{"lastDay":"[yesterday at] LT","lastWeek":"[last] dddd [at] LT","nextDay":"[tomorrow at] LT","nextWeek":"[on] dddd [at] LT","sameDay":"[today at] LT","sameElse":"[on] dddd[,] MMM Do[,] YYYY [at] LT"},"MOMENT_CALENDAR_SENDER_EXPIRING_SOON":{"lastDay":"LT [yesterday]","lastWeek":"LT [last] dddd","nextDay":"LT [tomorrow]","nextWeek":"LT [on] dddd","sameDay":"LT [today]","sameElse":"LT [on] dddd[,] MMM Do[,] YYYY"},"NESTED_MESSAGE_PLACEHOLDER_TEXT_DEFAULT":"Show last secure message","NESTED_MESSAGE_PLACEHOLDER_TEXT_LOADING":"Loading secure message...","NEW_COMPOSE_ARCHIVE_SEND":"Send +","NEW_COMPOSE_ARCHIVE_SEND_SECURE":"Secure Send +","NEW_COMPOSE_DISABLED_WHILE_SECURING":"Disabled while securing message (and attachments)","NEW_MESSAGE_NOT_SECURE":"New Message","NEW_FEATURE_POPOVER_PP_BODY":"Virtru can now keep your file attachments secured after they have been shared and downloaded.<br><br><a href=\'https://support.virtru.com/hc/en-us/articles/360022693153\'>Learn more</a> about this feature, including the recipient experience.","NEW_FEATURE_POPOVER_PP_BUTTON":"Dismiss","NEW_FEATURE_POPOVER_PP_LABEL":"New! Persistent Protection","NEW_MESSAGE_SECURE":"New Secure Message","OFFLINE_MODE_MODAL":{"PROTECTION_OFF":{"ACTION":"Close","BODY":"Virtru protection is currently disabled because your network connection is offline.","TITLE":"No network detected"},"PROTECTION_ON":{"ACTION":"Close","BODY":"Virtru protection is currently disabled because your network connection is offline. Any revisions while offline will not be saved.","TITLE":"No network detected"}},"OKGOTIT":"OK, GOT IT!","ONBOARDING_POPOVER_1_CONFIRM":"Activate","ONBOARDING_POPOVER_1_ENTERPRISE_BODY":"Your company uses Virtru to protect email and keep its\' data private. To start sending secure messages, activate your email account.","ONBOARDING_POPOVER_1_HEADER":"Welcome to Virtru","ONBOARDING_POPOVER_1_INDIVIDUAL_BODY":"Protecting email and keeping your data private is easy with Virtru. To start sending secure messages, activate your email account.","ONBOARDING_POPOVER_2_BODY":"You\'re now ready to send secure messages from {{currentUser}} using Virtru.","ONBOARDING_POPOVER_2_CONFIRM":"Next","ONBOARDING_POPOVER_2_HEADER":"Your email address is activated","ONBOARDING_POPOVER_2_SKIP_CHECKBOX_LABEL":"Don’t show again","ONBOARDING_POPOVER_3_BODY":"Changed your mind? Revoke access or update controls from your Gmail Sent Folder or your <a href=\'https://secure.virtru.com/control-center\'>Virtru Control Center</a>.","ONBOARDING_POPOVER_3_CONFIRM":"Done","ONBOARDING_POPOVER_3_HEADER":"You sent your first secure message!","ONBOARDING_RESTART_4_BODY":"Virtru protects your messages and attachments. To learn more about how Virtru protects you, please visit us at <a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>.","ONBOARDING_RESTART_4_ORG_BODY":"Virtru protection has been set to \\"On\\" by your Administrator, and will protect your messages and attachments.<br><br>To learn more about how Virtru protects you, please visit us at <a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>.","ONBOARDING_RESTART_4_ORG_HEADING":"Virtru Protection","ONBOARDING_RESTART_CONFIRM":"Take the tour","ONBOARDING_SEND_VERIFICATION":"Send Activation Email","ONBOARDING_TOUR_1_BODY":"When you\'re ready to send a secure message, select <span class=\\"bold\\">Compose</span> to begin.","ONBOARDING_TOUR_1_HEADER":"Start composing a message","ONBOARDING_TOUR_2_BODY":"Any time you need to send a secure message, turn on Virtru at the top right of the compose window. Drafts are also protected, even before you send.","ONBOARDING_TOUR_2_HEADER":"Turn on Virtru protection","ONBOARDING_TOUR_3_BODY":"Control access to your secure message: set an expiration date, disable forwarding, or watermark attachments.","ONBOARDING_TOUR_3_HEADER":"Add Security Options","ONBOARDING_TOUR_4_BODY":"Secure messages can include introduction text that the recipient can see without decrypting the whole message. You can customize that introduction by selecting <span class=\\"bold\\">Personal Introduction</span>.","ONBOARDING_TOUR_4_HEADER":"Personal Introduction","ONBOARDING_TOUR_CONFIRM":"OK","ONE_CLICK_OPTION":"Require Authentication","PAGE_ACTIONS_FORMAT_NON_PROD_MESSAGE":"This message was sent using {{acmUrl}}","PERSONAL_INTRO_ADD":"Personal Introduction","ARIA_PERSONAL_INTRO":"Personal Introduction","PERSONAL_INTRO_ONBOARD":"Add an unencrypted personal introduction to your private email.  This lets recipients know that your message is genuine and not spam.","PERSONAL_INTRO_PLACEHOLDER_TEXT":"[Enter your intro message here. Include information that only your recipient would know, or write it in such a way that they know it\'s really you.]","PLAINTEXT_NOT_SUPPORTED_HEADER":"Plain text mode is not supported","PLAINTEXT_NOT_SUPPORTED_TEXT":"Please turn off plaintext mode before continuing.","PLAINTEXT_NOT_SUPPORTED_TITLE":"Send Failed","POLICY_MENU_DISABLE_FORWARDING":"Disable Forwarding","POLICY_MENU_EXPANDED_WATERMARKING":"Watermarking","POLICY_MENU_PERSISTENT_PROTECTION":"Persistent Protection","POLICY_MENU_WATERMARKING":"PDF Watermarking","POLICY_MENU_SUPPORTED_FILES_INFO_TITLE":"Supported Formats","REQUIRE_AUTH_FOR_MORE_OPTIONS":"Require Authentication for more options","PROTECTION_REQUIRED":"Protection required","PROTECT_AND_SEND":"Protect & Send","READ_RECEIPT_FORWARD_COUNT_DETAILS":"(click for more details)","RECIPIENT":"Recipient Field","RECIPIENT_WIDGET_EXPIRATION_DATE":"Expires {{datetime}}","RECIPIENT_WIDGET_EXPIRED":"This message has expired","RECIPIENT_WIDGET_EXPIRED_BODY":"ACCESS EXPIRED","RECIPIENT_WIDGET_EXPIRED_DATE":"This message expired {{datetime}}","RECIPIENT_WIDGET_HEADER":"You are reading a secure message, protected by Virtru","RECIPIENT_WIDGET_NO_EXPIRATION":"No expiration date","RECIPIENT_WIDGET_OFFLINE_BODY":"LOST INTERNET CONNECTION","RECIPIENT_WIDGET_OFFLINE_HEADER":"Access to secure messages is not allowed without an internet connection.","RECIPIENT_WIDGET_REVOKED_BODY":"ACCESS REVOKED","RECIPIENT_WIDGET_REVOKED_HEADER":"The author has removed your access","RECIPIENT_WIDGET_UNAUTHORIZED_BODY":"THIS EMAIL ADDRESS IS NOT AUTHORIZED TO VIEW THIS EMAIL","RECIPIENT_WIDGET_UNAUTHORIZED_HEADER":"This email address is not authorized to read this email","RESTORE_DRAFT_FAILED":"There was a problem restoring this draft. Please check your network connection and try again.","SCREENREADER_VIRTRU_INFO":"More information about Virtru Email Protection","SCREENREADER_CLOSED_POLICY_MENU":"Closed policy menu","SCREENREADER_DISABLED_EXPIRATION":"Disabled expiration","SCREENREADER_DISABLED_FORWARDING":"Disabled forwarding","SCREENREADER_DISABLED_ONECLICK":"Disabled One-Click Access","SCREENREADER_DISABLED_WATERMARK":"Disabled watermark","SCREENREADER_DISABLED_WATERMARK_PDF":"Disabled watermark PDF","SCREENREADER_DISABLED_PFP":"Disabled persistent protection","SCREENREADER_DISABLE_FORWARDING":"Disable forwarding","SCREENREADER_ENABLED_EXPIRATION":"Enabled expiration","SCREENREADER_ENABLED_FORWARDING":"Enabled forwarding","SCREENREADER_ENABLED_ONECLICK":"Enabled One-Click Access","SCREENREADER_ENABLED_WATERMARK":"Enabled watermark","SCREENREADER_ENABLED_WATERMARK_PDF":"Enabled watermark PDF","SCREENREADER_ENABLED_PFP":"Enabled persistent protection","SCREENREADER_EXPIRATION":"Expiration set","SCREENREADER_ONECLICK":"Enable One-Click Access","SCREENREADER_OPENED_POLICY_MENU":"Opened policy menu","SCREENREADER_VIRTRU_POLICY_MENU":"Virtru Security Options","SCREENREADER_VIRTRU_SECURE_TOGGLE":"Virtru secure toggle","SCREENREADER_WATERMARK_PDF":"Watermark PDF","SCREENREADER_WATERMARK":"Watermark","SCREENREADER_PFP":"Persistent protection","SCREENREADER_SMS_ENABLED":"Enabled SMS two-factor authentication","SCREENREADER_SMS_DISABLED":"Disabled SMS two-factor authentication","SECURE_EMAIL_COMPOSER_PLACEHOLDER_HTML":"The email chain has been secured by Virtru.","SECURE_EMAIL_COMPOSER_POLICY_OPTIONS_DEFAULT":"(No Subject)","SECURE_MESSAGE_CONTROL_ENABLE":"Enable","SECURE_MESSAGE_CONTROL_REVOKE":"Revoke","SECURE_MESSAGE_LABEL":"You are reading a secured message","SECURE_MESSAGE_SENT_NOTIFICATION":"Secure message sent.","SECURED_ATTACHMENTS_HEADER":"{{count}} SECURED ATTACHMENT","SECURED_ATTACHMENTS_HEADER_plural":"{{count}} SECURED ATTACHMENTS","SENDER_WIDGET_ERROR_ENABLE_MESSAGE":"There was an error processing enabling this message.","SENDER_WIDGET_ERROR_REVOCATION":"There was an error processing the revocation.","SENDER_WIDGET_ERROR_UPDATE_POLICY":"There was an error updating the policy.","SENDER_WIDGET_EXPIRED_DATE":"Expired {{datetime}}","SENDER_WIDGET_EXPIRES_DATE":"Expires {{datetime}}","SENDER_WIDGET_MESSAGE_REVOKED":"This message has been revoked","SENDER_WIDGET_NO_EXPIRATION":"No expiration date","SENDER_WIDGET_REVOKED_DATE":"Revoked {{datetime}}","SEND_ANIMATION_LOADING_TEXT":"Encrypting Email...","SEND_ANYWAY":"Send Anyway","SEND_ANYWAY_OFFLINE":"Queue Anyway","SCHEDULE_SEND":"Schedule Send","GO_BACK":"Go Back","SEND_BLOCK_HEADER":"Email cannot be sent","SEND_BLOCK_SUBTEXT":"According to your organization\'s content security policy, this email contains sensitive information and cannot be sent without Virtru Protection.","SEND_BLOCK_BOLDTEXT":"Please remove any sensitive data, and try again.","SEND_WARNING_BUTTON_SEND":"SEND","SEND_WARNING_BUTTON_SEND_SECURE":"SEND SECURE","SEND_WARNING_BUTTON_SEND_SECURE_IMMEDIATELY":"Send Secure Now","SEND_WARNING_WARNING_SEND_SCHEDULED_LABEL":"However, schedule send is not currently supported with Virtru protection. Please either Send Secure Now or remove the sensitive information to Schedule Send.","SEND_WARNING_SCHEDULE_SEND_NOT_SUPPORTED":"Schedule send is not currently supported. Please either Send Secure Now or send schedule with no Virtru protection.","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE":"Scheduled send unavailable","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE_TOOLTIP":"Schedule send is not currently supported with Virtru protection","SENSITIVE_DATA_FOUND":"Sensitive data found","WARN_SENSITIVE_DATA_FOUND_BODY":"The message you\'re sending contains sensitive information. Your organization recommends that you turn on Virtru protection before sending this email.","WARN_SENSITIVE_DATA_FOUND_BODY_ADDITIONAL_OFFLINE":"You can protect and send this draft when you have regained network connectivity, or queue this email in your Outbox without Virtru protection.","WARN_SENSITIVE_DATA_FOUND_BODY_OFFLINE":"The message you\'re sending contains sensitive information.","WARN_SENSITIVE_DATA_FOUND_BODY_MAIL_MERGE":"However, Virtru protection is not compatible with Mail Merge in Gmail. Please select {{button}} on this screen and turn off Mail Merge to proceed.","SENSITIVE_DATA_FOUND_BODY":"The message you\'re sending contains sensitive information and your organization has automatically applied Virtru protection.","SENSITIVE_DATA_FOUND_BODY_OFFLINE":"The message you\'re sending contains sensitive information.","SENSITIVE_DATA_FOUND_BODY_ADDITIONAL_OFFLINE":"You can protect and send this draft when you have regained network connectivity, or remove the sensitive information to queue this email in your Outbox without Virtru protection.","WARN_ATTACHMENTS_LIMIT_REACHED":"Attachment limit reached","ATTACHMENTS_LIMIT_REACHED_BODY":"You have attached [ATTACHMENTS_COUNT] files to this message. Virtru protection supports up to [ATTACHMENTS_LIMIT] attachments per secure message. Please remove [ATTACHMENTS_REMOVE_COUNT] files from this secure message and try again.","SMART_SEND_SECURE_STACK_ERROR_HEADER":"Message cannot be sent","SMART_SEND_SECURE_STACK_ERROR_BODY":"This message exceeds the maximum size for encryption, typically due to the number of replies, forwards, or amount of content. Please reduce your message size, or start a new conversation.\\n\\nVisit <a href=\\"https://support.virtru.com/hc/en-us\\" target=\\"blank\\">Virtru Support</a> for more information.","TOOLTIP_DISABLE_FORWARDING":"Disable Forwarding","TOOLTIP_EXPIRATION":"Expiration Date","TOOLTIP_EXPIRES":"Expires: {{date}}","TOOLTIP_FORWARDING_RESTRICTED":"Forwarding Restricted","TOOLTIP_FORWARDING_RESTRICTED_CONTENT":"Forwarding has been restricted on a secure message in the chain.  Recipients added to your message may not be able to access the forwarded message.  The owner of the secure message must allow access to new recipients.","TOOLTIP_ONE_CLICK":"One-Click Access","TOOLTIP_REAUTHORIZE_BUTTON_CONTENT":"This message was revoked previously. Reauthorizing it will let people see it again.","TOOLTIP_REAUTHORIZE_BUTTON_TITLE":"Reauthorize Message","TOOLTIP_RECIPIENT_DISABLE_FORWARDING":"This Virtru-secured message has been restricted from forwarding by its sender.","TOOLTIP_ENABLE_SMS":"SMS two-factor authentication","TOOLTIP_RECIPIENT_SMS":"This Virtru-secured message require sms authentication.","TOOLTIP_RECIPIENT_EXPIRATION":"This Virtru-secured message expires {{date}}. To view this message after it expires, contact the sender.","TOOLTIP_RECIPIENT_ONE_CLICK":"This Virtru-secured message does not require authorization to read.","TOOLTIP_RECIPIENT_UNAUTHORIZED_INFO":"The original author of this email has restricted access to this message. Therefore, if you did not directly receive this message from the original author, you may not view its contents.<br><br>To get access, contact the original author.","TOOLTIP_REVOKE_BUTTON_CONTENT":"Disables access to your message. Other than you, no one will be able to see this message.","TOOLTIP_REVOKE_BUTTON_TITLE":"Revoke Message","TOOLTIP_SECURE_ATTACHMENT_CONTENT":"{{filename}} has been secured by Virtru","TOOLTIP_SECURE_ATTACHMENT_DOWNLOAD":"Decrypt & Download","TOOLTIP_SECURE_ATTACHMENT_DRIVE":"Save to Google Drive\\nnot Virtru supported","TOOLTIP_SECURE_ATTACHMENT_TITLE":"Virtru Secure Attachment","TOOLTIP_SENDER_DISABLE_FORWARDING_CONTENT":"This setting makes your message unreadable if it\'s been forwarded","TOOLTIP_SENDER_ENABLE_SMS2FA":"Access to this message will require SMS verification","TOOLTIP_SENDER_EXPIRATION_CONTENT":"After your specified time, your recipients will no longer have access to this message","TOOLTIP_SENDER_ONE_CLICK_CONTENT":"Turning this off makes authentication not required to view your encrypted message","TOOLTIP_TOGGLE_DISABLED":"You are not authorized to send securely.  Please contact your administrator if you have any questions.","TOOLTIP_TOGGLE_ON":"Virtru protection is enabled","TOOLTIP_TOGGLE_ON_ORG":"Virtru protection is enabled by default. You can disable if not required.","TOOLTIP_SENDER_WATERMARK":"Watermarking","TOOLTIP_SENDER_WATERMARK_CONTENT":"Supported attachments will be watermarked in Secure Reader","TOOLTIP_SENDER_PFP":"Persistent Protection","TOOLTIP_SENDER_PFP_CONTENT":"This setting protects files by requiring authentication even if it\'s shared or downloaded to a computer","TOOLTIP_TOGGLE_OFF":"Protect your message with Virtru","TOOLTIP_TOGGLE_OFF_OFFLINE":"Virtru protection cannot be enabled while offline","TOOLTIP_UPSELL_POSTFIX":"<br/><br/>This feature is available in the Pro version of Virtru.","TOOLTIP_VIRTRU_OPTIONS":"Security Options","TWO_FACTOR_AUTH_ERROR":"This sender has added extra security options.\\nYou must decrypt this message outside of Gmail.","UNLOCK_MESSAGE_BUTTON":"Unlock Message","UNSECURE_ATTACHMENTS_EXIST_HEADER":"Unsecure attachments exist","UNSECURE_ATTACHMENTS_EXIST_TEXT":"Unable to send secure while attachments detected.","UNSECURE_ATTACHMENTS_EXIST_TITLE":"Send Failed","UPDATE_MODAL_HEADER":"Virtru has been updated.","UPDATE_MODAL_REFRESH_BUTTON":"Click here to refresh","UPDATE_MODAL_SUBHEADER":"Please refresh this page to make sure <br>you\'re using the latest version.","VIRTRU_ATTACHMENT_DECRYPTING":"Decrypting","VIRTRU_ATTACHMENT_DOWNLOAD":"Download","VIRTRU_ATTACHMENT_VIEW":"View","VIRTRU_ATTACHMENT_REMOVE":"Remove","VIRTRU_AUTH_LINK":"Activate Virtru","VIRTRU_AUTH_LINK_REACTIVATE":"Reactivate Virtru","VIRTRU_CONTACT_US":"Please contact your IT administrator","VIRTRU_DISABLED_ON_DOMAIN":"Virtru has been disabled for your domain","VIRTRU_PROTECTION_NOT_AUTH":"Virtru must be activated to enable protection.","VIRTRU_PROTECTION_NOT_AUTH_OFFLINE":"Network connection required for Virtru activation.","VIRTRU_PROTECTION_NOT_AUTH_SHORT":"Please activate Virtru.","VIRTRU_PROTECTION_ON":"Virtru Protection ON","VIRTRU_PROTECTION_OFF":"Virtru Protection OFF","VIRTRU_PROTECTION_OFFLINE":"Virtru protection is offline","VIRTRU_SECURE_DRAFT_PREFIX":"This is a draft secured by Virtru","WEBMAIL_PLUGIN_ACTIVATION_LINK_RETRY":"Send again","WEBMAIL_PLUGIN_ACTIVATION_TEXT":"Verification email sent.<br>Check this inbox shortly.","WEBMAIL_PLUGIN_INIT_ERROR":"Virtru was unable to successfully initialize. This may be due to network connectivity errors or a broken user configuration. Please try refreshing again in a few moments, or contact Virtru customer support at <a href=\\"https://support.virtru.com/hc/en-us/\\">https://support.virtru.com/hc/en-us/</a>","WEBMAIL_PLUGIN_INIT_ERROR_HEADER":"Virtru plugin failed to initialize","WIDGET_BASE_BODY_REVOKED":"ACCESS DENIED","WIDGET_BASE_EXPIRATION_OPTIONS_CUSTOM":"Add custom date/time","WIDGET_BASE_FOOTER":"Secured by Virtru technology","WIDGET_BASE_HEADER_MESSAGE_RECIPIENT":"You are reading a secure message, protected by Virtru","WIDGET_BASE_HEADER_MESSAGE_SENDER":"Your message, protected by Virtru","WIDGET_BASE_MENU_OPTION_EXPIRES":"Add Expiration","WIDGET_BASE_MENU_OPTION_FORWARDING":"Disable Forwarding","EXPIRATION_UNIT_DAYS":"day","EXPIRATION_UNIT_DAYS_plural":"days","EXPIRATION_UNIT_HOURS":"hour","EXPIRATION_UNIT_HOURS_plural":"hours","EXPIRATION_UNIT_MINS":"minute","EXPIRATION_UNIT_MINS_plural":"minutes","EXPIRATION_UNIT_MONTHS":"month","EXPIRATION_UNIT_MONTHS_plural":"months","EXPIRATION_UNIT_WEEKS":"week","EXPIRATION_UNIT_WEEKS_plural":"weeks","EXPIRATION_UNIT_YEARS":"year","EXPIRATION_UNIT_YEARS_plural":"years","READ_RECEIPT_READBY_COUNT":"Read by {{accessors}} of {{count}} recipient","READ_RECEIPT_READBY_COUNT_plural":"Read by {{accessors}} of {{count}} recipients","READ_RECEIPT_FORWARD_COUNT":"<div style=\\"text-align:center;\\">Forwarded {{count}} time<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","READ_RECEIPT_FORWARD_COUNT_plural":"<div style=\\"text-align:center;\\">Forwarded {{count}} times<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","ATTACHMENTS_TOOLTIP_CONTENT":{"RECIPIENT":{"SUPPORTED_FILE":{"NONE_SECURE":"This file is encrypted with no additional security options enabled.","EXPANDED_WATERMARKING":"This file will be watermarked when viewed in Virtru Secure Reader.","IS_MANAGED":"This file will be watermarked when viewed in Virtru Secure Reader.","EXPANDED_IS_MANAGED":"This file has additional security options enabled, and will be watermarked and remain protected when downloaded or shared.","PERSISTENT_PROTECTION":"This file has Persistent Protection enabled, and will remain secure when downloaded or shared.","EXPANDED_PROTECTION":"This file has additional security options enabled, and will be watermarked and remain protected when downloaded or shared."},"UNSUPPORTED_FILE":{"NONE_SECURE":"This file is encrypted with no additional security options enabled.","EXPANDED_WATERMARKING":"No additional protection enabled due to unsupported file format.","IS_MANAGED":"No additional protection enabled due to unsupported file format.","EXPANDED_IS_MANAGED":"No additional protection enabled due to unsupported file format.","PERSISTENT_PROTECTION":"No additional protection enabled due to unsupported file format.","EXPANDED_PROTECTION":"No additional protection enabled due to unsupported file format."},"STEPCHILD":"This attachment has security settings that are managed separately from this message."},"SENDER":{"SUPPORTED_FILE":{"NONE_SECURE":"This file is encrypted with no additional security options enabled.","EXPANDED_WATERMARKING":"<p>Additional Security Options:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Watermarking</p>","IS_MANAGED":"<p>Additional Security Options:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>PDF Watermarking</p>","EXPANDED_IS_MANAGED":"<p>Additional Security Options:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>PDF Watermarking</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Persistent Protection</p>","PERSISTENT_PROTECTION":"<p>Additional Security Options:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Persistent Protection</p>","EXPANDED_PROTECTION":"<p>Additional Security Options:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Watermarking</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Persistent Protection</p>"},"UNSUPPORTED_FILE":{"NONE_SECURE":"This file is encrypted with no additional security options enabled.","EXPANDED_WATERMARKING":"No additional protection enabled due to unsupported file format.","IS_MANAGED":"No additional protection enabled due to unsupported file format.","EXPANDED_IS_MANAGED":"No additional protection enabled due to unsupported file format.","PERSISTENT_PROTECTION":"No additional protection enabled due to unsupported file format.","EXPANDED_PROTECTION":"No additional protection enabled due to unsupported file format."},"STEPCHILD":"This attachment has security settings that are managed separately from this message."}},"ATTACHMENT_SECTION_TOOLTIP_TITLE":"Secured Attachments","ATTACHMENT_SECTION_TOOLTIP_CONTENT":"The attachments below are encrypted by Virtru. Files with the lock icon have Persistent Protection enabled, and will still be protected after being shared or downloaded.","ERROR_REFRESH_TOAST_MESSAGE":"Virtru has encountered an error and may not function properly. Please refresh this page to continue.","REATTACH_FILE_WARNING_MESSAGE_POP_IN":"You will have to reattach your file. Pop-in anyway?","REATTACH_FILE_WARNING_MESSAGE_POP_OUT":"You will have to reattach your file. Tear off anyway?","PROTECTION_OVERVIEW_POPUP":"Virtru protection overview popup","PROTECTION_OVERVIEW_POPUP_CLOSE":"Close popup, button","SECURE_ATTACHMENT_INFO":"Secure attachment info","CKS_INDICATOR_TITLE":"Identity Verified","CKS_INDICATOR_BODY":"Sender identity verified by Virtru to prevent fraud.","CKS_INDICATOR_LINK":"Learn more here","MAIL_MERGE_CONFLICT_MODAL_TITLE":"Mail Merge Conflict","MAIL_MERGE_CONFLICT_MODAL_BODY":"Virtru Protection is not compatible with Mail Merge in Gmail. Please turn off Mail Merge before enabling Virtru Protection.","MAIL_MERGE_CONFLICT_TOOLTIP":"Mail Merge is not supported with Virtru Protection"}');

/***/ }),

/***/ 32841:
/***/ ((module, exports, __webpack_require__) => {

const i18nUtils = __webpack_require__(8341);
const locales = __webpack_require__(64474);
const {
  getCrossWindowStore
} = __webpack_require__(37060);
const isPopout = () => !window.GLOBALS;
const localeStore = getCrossWindowStore('locale');
const i18n = {
  queryLocale: null,
  /**
   * Sets query locale from query string
   */
  setQueryLocale: () => {
    const locale = new URLSearchParams(window.location.search).get('virtru-locale');
    i18n.queryLocale = locales[locale] ? locale : null;
  },
  /**
   * Detect language with new available locales list
   * @returns {string}
   */
  detectLocale: clientLocale => i18n.getCurrentLanguage() || i18nUtils.getLanguage({}, clientLocale || 'en'),
  /**
   * Sets new language
   * @param language
   */
  updateLanguage: language => {
    i18nUtils.setLanguage(language, () => {
      if (!isPopout()) {
        localeStore.userLocale = language;
      }
    });
  },
  /**
   * For sync between all instances of i18next
   * @returns {string}
   */
  getCurrentLanguage: () => i18n.queryLocale,
  getActualLanguage: () => isPopout() ? localeStore.userLocale : document.documentElement.lang,
  detectActualLocale: () => i18n.detectLocale(i18n.getActualLanguage()),
  /**
   * Sync current language between 2 instances of i18next
   * created by content and gmail scripts
   */
  syncCurrentLanguage: () => {
    const currentRealLanguage = i18n.detectActualLocale();
    i18n.updateLanguage(currentRealLanguage);
  },
  init: () => {
    i18n.setQueryLocale();
    i18nUtils.updateLocales(locales);
    const locale = i18n.detectActualLocale();
    if (!document.documentElement.lang) {
      document.documentElement.lang = locale; // set HTML.lang attribute for popout window if needed
    }
    return i18nUtils.init(locales, locale, {});
  }
};

// Remove casted 't' function to avoid infinite loops
// eslint-disable-next-line no-unused-vars
const {
  t,
  ...cleanUtils
} = i18nUtils;
const i18nInstance = i18n.init();
module.exports = exports = Object.assign(i18nInstance, cleanUtils, i18n);

/***/ }),

/***/ 37060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCrossWindowStore: () => (/* binding */ getCrossWindowStore),
/* harmony export */   getWindowOpener: () => (/* binding */ getWindowOpener)
/* harmony export */ });
// Return correct window object
// depending of how we open compose.
// For shift + click it opens new window
// so we have to operate with window.opener
const getWindowOpener = () => {
  const getUrl = target => target.location.origin + target.location.pathname;
  let result = window;
  while (result.opener) {
    try {
      // We have to make sure that we use the correct
      // window in order to not break the other user
      // profile tab functionality
      const popoutUrl = getUrl(window);
      const openerUrl = getUrl(result.opener);
      if (popoutUrl !== openerUrl && !popoutUrl.includes(openerUrl)) {
        break;
      }

      // inspired by https://github.com/virtru/browser-extension/pull/1039
      result.opener.isAnyPropertyAccessible = 1;
      result = result.opener;
    } catch (error) {
      break;
    }
  }
  return result;
};
const getCrossWindowStore = storeKey => {
  const globalStoreKey = '_cross_window_store_';
  const store = getWindowOpener();
  if (!Object.hasOwn(store, globalStoreKey)) {
    store[globalStoreKey] = {};
  }
  if (!store[globalStoreKey][storeKey]) {
    store[globalStoreKey][storeKey] = {};
  }
  return store[globalStoreKey][storeKey];
};

/***/ }),

/***/ 42634:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 47206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callContentScript: () => (/* binding */ callContentScript),
/* harmony export */   isFeatureEnabled: () => (/* binding */ isFeatureEnabled)
/* harmony export */ });
/* unused harmony exports pdftronFileTypes, onA11yClick, formatForTransport, processError, mergeSelectors, isPfpFile, isTdf3Html, isUid, hasPfpFileExtensions, supportsLegacyWatermarking, supportsExpandedWatermarking, getFileExtension, getAttachmentData, getFileType */
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63985);
/* harmony import */ var _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52938);
/* harmony import */ var _virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virtru_private_binaryjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75522);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76223);
/* harmony import */ var _lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8561);
/* provided dependency */ var console = __webpack_require__(31799);





// MIME types supported by the PDFTron WebViewer renderer
const pdftronFileTypes = (/* unused pure expression or super */ null && (['pdf', 'docx', 'xlsx', 'pptx', 'jpeg', 'jpg', 'png']));

// Attach a click listener that also triggers on space + enter to better support screenreaders
function onA11yClick(element, callback) {
  const $ = __webpack_require__(91089);
  $(element).on('click keypress', e => {
    if (isA11yClick(e)) {
      callback(e);
    }
  });
}

// Determine if an event is either a click or a screenreader simulated click (with ENTER or SPACE key codes)
function isA11yClick(event) {
  return event.type === 'click' || event.type === 'keypress' && (event.charCode === 32 || event.charCode === 13);
}

// Serialize an error message so that it can be transferred in between extension scripts
function formatForTransport(obj) {
  var type = toString.call(obj);
  if (type === '[object Error]' || type === '[object DOMException]') {
    return processError(obj);
  }
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    // We need to make a copy for cases when obj property has only a getter
    const objectCopy = {};
    Object.entries(obj).forEach(([key, value]) => {
      objectCopy[key] = formatForTransport(value);
    });
    return objectCopy;
  }
  return obj;
}
const ERROR_PROPERTIES = (/* unused pure expression or super */ null && (['name', 'message', 'type', 'status', 'stack', 'arguments', 'reason']));
function processError(err) {
  var info = {};
  ERROR_PROPERTIES.forEach(function (name) {
    if (err[name] !== null) {
      info[name] = err[name];
    }
  });
  return info;
}

/**
 * Check for feature enablement. If the feature has a GA_date specified, check if the current date exceeds it yet.
 *
 * @param featureName
 * @returns {*}
 */
function isFeatureEnabled(profile, featureName) {
  var _profile$settings, _profile$settings$cli, _profile$settings2;
  // Allow for feature flag OR user permission to enable the functionality.
  const featureObj = (profile === null || profile === void 0 ? void 0 : (_profile$settings = profile.settings) === null || _profile$settings === void 0 ? void 0 : (_profile$settings$cli = _profile$settings.clientConfig) === null || _profile$settings$cli === void 0 ? void 0 : _profile$settings$cli.features[featureName]) || (profile === null || profile === void 0 ? void 0 : (_profile$settings2 = profile.settings) === null || _profile$settings2 === void 0 ? void 0 : _profile$settings2.permissions[featureName]) || false;
  if (typeof featureObj === 'object' && typeof featureObj.GA_date === 'string') {
    return Date.now() >= new Date(featureObj.GA_date).getTime();
  }
  return !!featureObj;
}

/**
 * Helper function to merge selectors by iterating through the selectors in newest
 * to oldest order and build up our merged selectors as we go
 *
 * @param {Object} selectors - Selectors to merge
 * @param {String} gmailVersion - Gmail Version
 */
function mergeSelectors(selectors, gmailVersion) {
  let mergedSelectors;
  const versions = Object.keys(selectors).filter(Number) // filter out non BP selectors
  .sort((a, b) => b - a);
  for (const version of versions) {
    if (Number(gmailVersion) >= Number(version)) {
      mergedSelectors = {
        ...selectors[version],
        ...mergedSelectors
      };
    }
  }
  return mergedSelectors;
}

/**
 * Determine if a filename is a TDF.html file, i.e. a PFP file
 *
 * @param {String} filename - the filename of a Virtru attachment
 */
function isPfpFile(filename) {
  const lowerCaseFileName = filename.toLowerCase();
  return filename.indexOf('tdf') >= 0 && (lowerCaseFileName.endsWith('.htm') || lowerCaseFileName.endsWith('.html'));
}

/**
 * Determine if a file is a tdf3 html file
 *
 * @param {String} filename - the filename of a Virtru attachment
 */
function isTdf3Html(filename, html) {
  const $ = __webpack_require__(91089);
  const lowerCaseFileName = filename.toLowerCase();
  const isHtml = /\.html?$/.test(lowerCaseFileName);
  if (!isHtml) {
    return false;
  }
  const iframeSrc = $('<div></div>').append(html).find('iframe').attr('src') || '';
  return iframeSrc.includes('virtru.com/start?htmlProtocol=1');
}
const isUid = str => /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/.test(str);

/**
 * Determine if a filename is a TDF.html file, i.e. a PFP file
 *
 * [IMPORTANT]
 * The only safe way to check if file is PFP is `previewLink` extraction
 * Use this check only if its not possible: e.g. before the file is uploaded
 *
 * This check may return incorrect `true` result for file names like XXX.tdfXXX.html
 *
 * We don't check if it ends with `.tdf.hmtl` because file copy may look like `.tdf (1).hmtl`
 * We don't use regular expression because we don't know all the possible cases of how do
 * the copies' names look like: it depends on OS, number of times file has been copied, etc.
 *
 * @param {String} fileName - the filename of a Virtru attachment
 * @return {Boolean} - whether the file is PFP file
 */
function hasPfpFileExtensions(fileName) {
  if (typeof fileName === 'string') {
    const lowerCaseFileName = fileName.toLowerCase();
    const filenameParts = lowerCaseFileName.split('.');
    if (filenameParts.length > 2 && filenameParts[0]) {
      const extension = filenameParts[filenameParts.length - 1];
      const subExtension = filenameParts[filenameParts.length - 2];
      return (extension === 'htm' || extension === 'html') && subExtension.startsWith('tdf');
    }
  }
  return false;
}

/**
 * Simply checks a filename to determine whether it's a PDF media type.
 *
 * @param {String} filename - the filename of an attachment
 * @return {Boolean} - whether the file is supported
 */
function supportsLegacyWatermarking(filename) {
  return filenameIsSupportedType(filename, ['pdf']);
}

/**
 * Simply checks a filename to determine whether it's a PFP-supported media type.
 *
 * @param {String} filename - the filename of an attachment
 * @return {Boolean} - whether the file is supported
 */
function supportsExpandedWatermarking(filename) {
  return filenameIsSupportedType(filename, ['pdf', 'docx', 'xlsx', 'pptx', 'jpg', 'jpeg', 'png']);
}

/**
 * Checks a filename to determine whether it has an extension in the provided list.
 *
 * @param {String} filename - the filename of an attachment
 * @param {Array[String]} supportedFileTypes - array of extensions to check
 * @return {Boolean} - whether the file is supported
 */
function filenameIsSupportedType(filename, supportedFileTypes) {
  return supportedFileTypes.indexOf(getFileExtension(filename)) >= 0;
}

/**
 * Function for get file extension from its name
 * @param fileName - name ex. file.ext
 * @return {String} file extension
 */
function getFileExtension(fileName) {
  if (typeof fileName === 'string') {
    const filenameParts = fileName.toLowerCase().split('.');
    if (filenameParts.length > 1 && filenameParts[0]) {
      return filenameParts.pop();
    }
  }
  return false;
}
function getAttachmentData(_attachment) {
  var attachment = {
    file: {
      type: 'regular',
      name: _attachment.name,
      binary: Binary.fromString('')
    }
  };

  // no need to fetch inline image content
  if (_attachment.url && !_attachment.inlineImageUuid) {
    if (_attachment.binary) {
      return Promise.resolve({
        file: {
          ..._attachment
        }
      });
    }
    return Request.get(_attachment.url).responseType('arraybuffer').retry(25).then(resp => {
      attachment.file.type = 'broken';
      if (resp.status === 404) {
        console.error('File not found:', attachment);
        return resolve(attachment); // eslint-disable-line
      }
      if (resp.status < 200 || resp.status > 299) {
        console.error('Request failed:', attachment);
        return resolve(attachment); // eslint-disable-line
      }
      var binary = Binary.fromArrayBuffer(resp.body);
      attachment.file.binary = binary;
      attachment.file.type = resp.type;
      return attachment;
    });
  }
  return attachment;
}

/**
 * Allows the popup & background to communicate to the content script.
 *
 * This is a similar idea to the transports object available on the sdk.
 * However, the sdk is not yet available to the popup. It may not ever be
 * available.
 *
 * @param {String} command The name of the command to call on the content
 *                         script
 * @param {Object} params The parameters to the command
 * @returns {Any} Response from the content script
 *
 * @deferred
 */
const callContentScript = function (command, params) {
  return new Promise((resolve, reject) => {
    const envelope = {
      uniqueExtensionKey: _lib_email_lib_constants__WEBPACK_IMPORTED_MODULE_3__.EXTENSION_KEY,
      type: 'command',
      action: command,
      target: 'content',
      data: params
    };
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      if (tabs.length > 0) {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, envelope, function (response) {
          if (typeof response === 'undefined') {
            reject(new Error('No response'));
          } else if (response.error) {
            reject(response.error);
          } else {
            resolve(response.data);
          }
        });
      } else {
        reject(new Error('No active tabs found'));
      }
    });
  });
};
const getFileType = function (name) {
  // Determine the file extension in order to lookup the mime type
  const displayNameParts = typeof name === 'string' ? name.split('.') : [];
  const fileExtension = displayNameParts.length > 1 ? displayNameParts.pop() : '';
  return mime.getType(fileExtension) || 'application/octet-stream';
};


/***/ }),

/***/ 49706:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"ACTIVATION_BUTTON_ACTIVATE":"{{currentUser}} のアクティベート","ACTIVATION_BUTTON_REACTIVATE":"{{currentUser}} の再アクティベート","ACTIVATION_FAILED":"アクティベーションに失敗しました","ACTIVATION_FAILED_GENERAL_BODY":"Virtru の保護をアクティベートできませんでした。時間をおいてもう一度試すか、管理者にお問い合わせください。","ACTIVATION_HEADER_USER_NOT_ACTIVATED":"{{currentUser}} は Virtru を使用するようにアクティベートされていません","ACTIVATION_LINK":"しくみ","ACTIVATION_MESSAGE_DELEGATION_LINK":"アクティベート","ACTIVATION_SUBTEXT":"プライバシーを保護するには、定期的に身元を確認させていただく必要があります。時間はわずか 1 分、クリックして再アクティベートするだけです。","ACTIVATION_TEXT_ACTIVATE":"Virtru をアクティベートして<br>安全なメールを作成","ACTIVATION_TEXT_REACTIVATE":"Virtru を再アクティベートして続行","ACTIVATION_WAIT_CANCELED":"認証タブが閉じられたため、Virtru はメール アカウントを認証できませんでした。<br/><br/>下の [もう一度お試しください] リンクをクリックしてプロセスをもう一度開始してください","ACTIVATION_WAIT_ERROR":"Virtru - 認証できませんでした","ACTIVATION_WAIT_FAILED":"現在のブラウザー設定で Cookie の作成が許可されていないため、またはメール アドレスを確認するための Virtru のリクエストが却下されたため、Virtru はメール アカウントを認証できませんでした。</br><br/>認証プロセスには Cookie が必要です。ブラウザーのデフォルトの Cookie 設定を変更している場合、すべての Cookie を許可するようにブラウザーを設定してから [もう一度お試しください] ボタンをクリックしてください。アカウントが認証された後であれば、Cookie の制限を再度有効にしても引き続き Virtru を使用できます。</br><br/>Virtru は、アクティベート対象のアカウントが本人のものであることを確認するため、ウェブメール プロバイダーから [メール アドレスの表示] 権限をリクエストする場合があります。Virtru によるメール アドレスの使用方法の詳細については、<a href=\\"https://www.virtru.com/terms-of-service\\" target=\\"_blank\\">利用規約<a/>および<a href=\\"https://www.virtru.com/privacy-policy\\" target=\\"_blank\\">プライバシー ポリシー</a>を参照してください。この権限を付与するには、[もう一度お試しください] をクリックしてください。","ACTIVATION_WAIT_HEADER":"Virtru - 認証中...","ACTIVATION_WAIT_IN_PRIVATE":"ブラウザーがプライベート モードになっていたため、Virtru はメール アカウントを認証できませんでした。プライベート モードは [incognito] モードや [InPrivate] モードとも呼ばれます。認証プロセスには Cookie が必要ですが、プライベート モードでは制限されています。</br><br/>続行するには、プライベート モードを無効にしてウェブメール ウィンドウまたはタブに戻り、認証プロセスをもう一度開始してください。</br><br/>アカウントが認証された後であれば、プライベート モードを再び有効にしても、引き続き Virtru を利用できます。","ACTIVATION_WAIT_MESSAGE":"Virtru は引き続きこのブラウザーでメール アドレスを認証中です。認証が認証を完了するまで、安全なメッセージを送信したり読んだりすることはできません。","ANIMATION_WIDGET_LOADING_TEXT":"メールを復号化しています...","ATTACHMENTS_UPLOADING_NO_SEND":"送信するには、事前に添付ファイルのアップロードを完了する必要があります。","ATTACHMENT_APPID_ERROR_HEADER":"アクティベーションの期限切れ","ATTACHMENT_APPID_ERROR_TEXT":"アクティベーションの期限が切れているため、添付ファイルをアップロードできません。再アクティブ化してもう一度お試しください。","ATTACHMENT_CONNECTION_ERROR_HEADER":"ネットワークエラー","ATTACHMENT_CONNECTION_ERROR_TEXT":"添付ファイルのアップロードで問題が発生しました。接続を確認してもう一度お試しください。","ATTACHMENT_CONTENT":"添付ファイルのコンテンツ","ATTACHMENT_ERROR_CORRUPT":"添付ファイルが破損しているため、復号化できません。送信者に添付ファイルの再送信を依頼してください。","ATTACHMENT_ERROR_UNAUTHORIZED":"このファイルにアクセスすることが承認されていません。","ATTACHMENT_ERROR_UNKNOWN":"エラーが発生したため、Virtru はこのファイルをダウンロードまたは復号化できません。後でもう一度お試しください。","ATTACHMENT_GENERIC_ERROR_BUTTON":"却下","ATTACHMENT_GENERIC_ERROR_HEADER":"添付ファイル エラー","ATTACHMENT_GENERIC_ERROR_TEXT":"添付ファイルのアップロードで問題が発生しました。再度試す前にファイル、ブラウザ、プラグインを確認してください。","ATTACHMENT_INTEGRITY_COMPROMISED":"Virtru はこの添付ファイルを復号化できません。この状況は通常、メッセージの暗号文が変更されたときに発生し、このため暗号化が読み取れなくなります。","ATTACHMENT_ERROR_CLOSE_BUTTON":"閉じる","ATTACHMENT_NOT_READY_ERROR":"添付ファイルの準備ができていません","ATTACHMENT_OPTIONS":"添付ファイルのオプション","ATTACHMENT_PFP_ERROR_HEADER":"添付ファイル エラー","ATTACHMENT_REVOKED_HEADER":"アクセスが取り消されました","ATTACHMENT_REVOKED_TEXT":"このファイルを表示する権限がありません","ATTACHMENT_TOO_LARGE_HEADER":"添付ファイルが大きすぎる","ATTACHMENT_TOO_LARGE_TEXT":"いずれかの添付ファイルが暗号化するには大きすぎます。添付するファイルは {{maxSizeMb}} MB 未満にしてください。","ATTACHMENT_TOO_LARGE_SUGGEST_SECURE_SHARE_TEXT":"1 つ以上の添付ファイルが電子メール暗号化のサイズ制限を超えています。 {{maxSizeMb}} MB 未満のファイルを添付するか、 Virtru Secure Share を使用して最大 {{secureShareMaxSize}} GB のファイルを受信者に安全に送信してください。","CANNOT_DECRYPT_GET_HELP":"この詳細については、Virtru のよくある質問を参照してください。","CANNOT_DECRYPT_HEADER":"変更された可能性があるメッセージ","CANNOT_DECRYPT_MESSAGE_CKS":"{{ownerName}} 暗号化サーバーにアクセスできません。<br/>サポートが必要な場合には、<a href=\\"{{ownerSupportUrl}}\\"><br/>{{ownerName}} サポート デスクにお問い合わせください</a>。","CANNOT_DECRYPT_MESSAGE_CKS_TROUBLE_READING_EMAIL":"メールの読み取りで問題が発生しました。後でもう一度お試しください！","CANNOT_DECRYPT_MESSAGE_INTEGRITY_COMPROMISED":"Virtru によって、このメッセージが改ざんされている可能性があることが検出されました。<span class=\\"vic-message-bold\\">{{sender}}</span> に、メッセージを再送信するように依頼してください。","CHROME_POPUP_ABOUT_VIRTRU_BUTTON":"Virtru について","CHROME_POPUP_ACTIVATION_BUTTON":"{{userId}} 用に Virtru をアクティベート","CHROME_POPUP_ACTIVATION_LABEL":"Virtru メール保護","CHROME_POPUP_SIGN_OUT_BUTTON":"サインアウト","CHROME_POPUP_VIRTRU_DASHBOARD_BUTTON":"Virtru ダッシュボード","CHROME_POPUP_SUPPORT_BUTTON":"サポート","CHROME_POPUP_UNINSTALL_BUTTON":"アンインストール","CHROME_POPUP_DRIVE_CROSS_SELL":"Virtru for Drive を入手","CHROME_POPUP_SECURE_SHARE_CROSS_SELL":"Virtru Secure Share for Drive を入手","COMMON_CANCEL":"キャンセル","COMMON_OK":"OK","COMMON_REFRESH":"このページを更新","COMMON_SEND":"送信","COMMON_SEND_SECURE":"安全な送信","COMMON_TRY_AGAIN":"もう一度試す","COMPOSE_ACTIVATION_REQUIRED":"Virtru にはアクティベーションが必要です","COMPOSE_ATTACHMENTS_UPLOADING_WARN":"添付ファイルのアップロード中はセキュア モードを切り替えられません。添付ファイルのアップロードが完了するまで待ってから、セキュア モードを切り替えてください。","COMPOSE_DRIVE_ATTACHMENTS_UNSUPPORTED":"Virtru は現在ドライブの添付ファイルをサポートしていません。削除しますか?","COMPOSE_EXPIRES":"{{timeRemaining}} に期限切れ","COMPOSE_INSERT_DRIVE_INSERT_FILE":"セキュア モードでは Google ドライブからのファイルの挿入はサポートされていません。","COMPOSE_INSERT_PHOTOS_INLINE_IMAGES":"現在のところ、Virtru はインライン画像をサポートしていません。","COMPOSE_OFF_CONFIRM_REMOVE":"セキュア モードを無効にすると、すべての安全な添付ファイルが削除されます。この操作を実行しますか?","CONTENT_IS_MANAGED":"送信元がこのファイルのダウンロードを無効にしました。","CONTEXTUAL_ACTIVATE_INFO":"アカウント {{currentUser}} は Virtru でアクティベートされていません。アクティベートすると、身元が確認され、Virtru から安全なメッセージを復号化するキーが送信されます。Virtru がコンテンツにアクセスすることはありません。","DISMISS_POPOVER_DEFAULT_OPTIONS_TEXT":"了解しました。","DOWNLOAD_ATTACHMENT_DECRYPTING":"復号しています","EMAIL_BODY_CONTENT":"メールの本文","EMAIL_ERROR_EMAIL_CORRUPT":"メッセージが破損しているため、復号化できません。送信者にメッセージの再送信をお願いしてください。","EMAIL_ERROR_EMAIL_CORRUPT_HEADER":"メールの破損","EMAIL_ERROR_INTERNAL_SERVER_ERROR":"Virtru のサーバーが応答しませんでした。しばらく待ってからもう一度お試しください。","EMAIL_ERROR_INTERNAL_SERVER_ERROR_HEADER":"サーバー エラー","EMAIL_ERROR_NETWORK_LOST":"Virtru はインターネットに接続できませんでした。インターネット接続を確認してもう一度お試しください。","EMAIL_ERROR_NETWORK_LOST_HEADER":"ネットワーク接続エラー","EMAIL_ERROR_READ":"メッセージを復号化できませんでした。インターネット接続を確認してもう一度お試しください。","EMAIL_ERROR_SEND":"エラーが発生したため、メッセージを送信できませんでした。インターネット接続を確認してもう一度お試しください。","EMAIL_ERROR_SMART_SEND_SECURE":"メッセージを送信しようとしてエラーが発生しました。問題が解消されない場合、Virtru にご連絡ください。","EMAIL_ERROR_SMART_SEND_SECURE_HEADER":"送信でエラーが発生しました","EMAIL_ERROR_TEMPLATE_SUPPORT_LINK":"Virtru サポート","EMAIL_ERROR_UNKNOWN":"エラーが発生したため、メッセージを読み取れませんでした。インターネット接続を確認してもう一度お試しください。","EMAIL_ERROR_UNKNOWN_HEADER":"不明なエラー","EMAIL_ERROR_YOURE_ON_STAGING":"ちょっと待ってください...不正な操作で不正なサーバー (中継/プロダクション) から送信されたメールを読もうとしているようです。オプション ページで、参照しているサーバーを確認してください...知らない間に不正なサーバーを参照している可能性もあります。","EMAIL_ERROR_YOURE_ON_STAGING_HEADER":"ちょっと待ってください...不正な操作で次の送信元から送信されたメールを読もうとしているようです ","EMAIL_ERROR_SEND_REACTIVATION":"アクティベーションの有効期限が切れました。メッセージを送信するには再度アクティベートしてください。","EMAIL_ERROR_SEND_REACTIVATION_HEADER":"送信エラー","EMAIL_ERROR_SEND_REACTIVATION_RETRY_BUTTON":"再アクティブ化して送信","EMAIL_ERROR_READ_SECURE_READER_LABEL":"Virtru の Secure Reader でメッセージを表示するには、ここをクリックしてください","EMAIL_EXPIRATION":"有効期限","EMAIL_INVALID_ADDRESS":"アドレス「{{invalidAddress}}」は認識されませんでした。すべてのアドレスの形式が正しいことを確認してください。","EMAIL_INVALID_ADDRESS_GENERIC":"1 件以上のメール アドレスが認識されませんでした。すべてのアドレスの形式が正しいことを確認してください。","EMAIL_TEMPLATE_FOOTER":"Virtru で保護されています","EMAIL_TEMPLATE_SENDER_HEADER":"メッセージは Virtru によって保護されています","ENCRYPTED_SEARCH_REMINDER_HEADER":"暗号化された検索は検索結果に表示されません。","ENCRYPTED_SEARCH_REMINDER_SUBTEXT":"Virtru で暗号化されたメッセージ本文の検索は現在有効になっていません。暗号化された検索を有効にする方法については、ここをクリックしてください。","ENHANCEDPDF_DL_DISABLED_TOOLTIP":"送信元がこのファイルのダウンロードを無効にしました。Virtru のセキュア リーダーで表示するには、以下をクリックしてください。","ENHANCEDPDF_DL_DISABLED_TOOLTIP_TITLE":"高度な PDF の保護","EXPANDED_WATERMARKING_DL_DISABLED_TOOLTIP_TITLE":"高度な保護","FAQ":"FAQ","FEATURE_CHIP_TEXT":"新機能","FEATURE_ENCRYPTED_SEARCH_FAQ":"よくある質問で詳細を確認","FEATURE_ENCRYPTED_SEARCH_POPUP_DESCRIPTION":"Virtru で暗号化されたメールの検索を有効にするには、下をクリックして Virtru ダッシュボードの [機能] タブに移動します。","FEATURE_ENCRYPTED_SEARCH_BUTTON":"コントロールセンターに移動","FEATURE_ENCRYPTED_SEARCH_CANCEL":"後で","FEATURE_ENCRYPTED_SEARCH_DESCRIPTION":["コントロールセンターで、「機能」タブに移動し、検索を有効にします。","または、詳細については FAQ を参照してください。"],"FEATURE_ENCRYPTED_SEARCH_TITLE_TEXT":"暗号化されたメールを検索","FEATURE_ENCRYPTED_SEARCH_SUB_TITLE_TEXT":"Virtru で暗号化された電子メールの検索を有効にする","FEATURE_VAULT_BUTTON":"始めましょう","FEATURE_VAULT_CANCEL":"結構です","FEATURE_VAULT_DESCRIPTION":["暗号化されたメールを検索し、直接復号化します","Virtru暗号化による機密性の維持","権限のある当事者によって簡単に発見可能","既存の Google インターフェースに統合","詳細については、Virtru の担当者にお問い合わせください。"],"FEATURE_VAULT_TITLE_TEXT":"Google Vault で Virtru メールを検索","FEATURE_VAULT_SUB_TITLE_TEXT":"Google Vault パッケージを Virtru のエンドツーエンド暗号化に追加する","FILE_SIZES":{"BYTES":"b","UNITS":["Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"]},"DELIMITERS":{"DECIMAL":"."},"FIRST_TIME_ONBOARD_LINK_ACTIVATE":"アクティベート","FOOTER_POPOVER_BODY":"Virtru を使用すれば安全にメールを送信できることを友人や同僚に知らせましょう。","FOOTER_POPOVER_HEADER":"プライベートな通信を実現","FOOTER_POPOVER_REMOVE_SIGNATURE":" メール署名から削除 ","FOOTER_PROMO":"私にプライベートなメールを送信する必要がありますか?私は","FOOTER_PROMO_USE":"Virtru","FORWARDING_RESTRICTED":"- 転送が制限されています","GMAIL_BASIC_MODE_UNSUPPORTED_MAIN":"Gmail の標準 HTML 表示はサポートされていません","GMAIL_BASIC_MODE_UNSUPPORTED_SUB":"Virtru を使用するには標準表示に切り替えてください。","GO_TO_SECURE_SHARE":"「Secure Shareに行く」","INTRO_MESSAGE_FOOTER_TEXT":"この行より上のテキストは暗号化されません。","INVITATION_EMAIL_REPLACE_TEXT_DEFAULT":"これは、Virtru で保護された安全なメッセージ チェーンです。","LEARN_MORE":"詳細を確認","LIMITED_ENCRYPTION_BUTTON_CANCEL":"キャンセル","LIMITED_ENCRYPTION_BUTTON_OK":"続ける","LIMITED_ENCRYPTION_CHECKBOX":"今後表示しない","LIMITED_ENCRYPTION_HEADER":"制限された保護","LIMITED_ENCRYPTION_TEXT":"ファイルタイプがサポートされていない、または、このメッセージとは別に管理されているセキュリティが設定されているため、永続的な保護や透かしなどの追加のセキュリティ機能は、次の添付ファイルには適用されません:","MESSAGE_OPTIONS":"メッセージ オプション","MOMENT_CALENDAR_POLICY_CONFIG_FULL_DATE":{"lastDay":"[昨日] LT","lastWeek":"[先週] dddd、 LT","nextDay":"[明日] LT","nextWeek":"dddd、LT","sameDay":"[今日] LT","sameElse":"YYYY 年 MMM (dddd)、LT"},"MOMENT_CALENDAR_RECIPIENT_EXPIRATION":{"lastDay":"[昨日] LT","lastWeek":"[先週] dddd、LT","nextDay":"[明日] LT","nextWeek":"[来週] dddd、LT","sameDay":"[今日] LT","sameElse":"YYYY 年 MMM 月 dddd[,]、LT"},"MOMENT_CALENDAR_SENDER_EXPIRED":{"lastDay":"[昨日] LT","lastWeek":"[先週] dddd、 LT","nextDay":"[明日] LT","nextWeek":"[来週] dddd、 LT","sameDay":"[今日] LT","sameElse":"YYYY 年 MMM (dddd)、LT"},"MOMENT_CALENDAR_SENDER_EXPIRING_SOON":{"lastDay":"[昨日] LT","lastWeek":"[先週] dddd、LT","nextDay":"[明日] LT","nextWeek":"[来週] dddd、LT","sameDay":"[今日] LT","sameElse":"YYYY 年 MMM (dddd)、LT"},"NESTED_MESSAGE_PLACEHOLDER_TEXT_DEFAULT":"最後の安全なメッセージを表示","NESTED_MESSAGE_PLACEHOLDER_TEXT_LOADING":"安全なメッセージを読み込んでいます...","NEW_COMPOSE_ARCHIVE_SEND":"送信 +","NEW_COMPOSE_ARCHIVE_SEND_SECURE":"安全な送信 +","NEW_COMPOSE_DISABLED_WHILE_SECURING":"メッセージ (および添付ファイル) の保護中に無効になりました","NEW_MESSAGE_NOT_SECURE":"新規メッセージ","NEW_FEATURE_POPOVER_PP_BODY":"添付ファイルが共有されたりダウンロードされたりした後であっても、Virtru は添付ファイルを保護します。<br><br>この機能について、受信者のエクスペリエンスと合わせて<a href=\'https://support.virtru.com/hc/en-us/articles/360022693153\'>ご確認ください</a>。","NEW_FEATURE_POPOVER_PP_BUTTON":"却下","NEW_FEATURE_POPOVER_PP_LABEL":"新着！永続的な保護","NEW_MESSAGE_SECURE":"新規の安全なメッセージ","OKGOTIT":"了解しました！","ONBOARDING_POPOVER_1_CONFIRM":"アクティベート","ONBOARDING_POPOVER_1_ENTERPRISE_BODY":"お客様の企業はメールを保護してデータを非公開にするのに Virtru を使っています。安全なメッセージの送信を開始するには、メールアカウントをアクティベートしてください。","ONBOARDING_POPOVER_1_HEADER":"Virtru へようこそ","ONBOARDING_POPOVER_1_INDIVIDUAL_BODY":"メールを保護してデータを非公開にするのは、Virtru を使えば簡単です。安全なメッセージの送信を開始するには、メールアカウントをアクティベートしてください。","ONBOARDING_POPOVER_2_BODY":"{{currentUser}}で Virtru を使用して安全なメッセージを送信する準備ができました。","ONBOARDING_POPOVER_2_CONFIRM":"次へ","ONBOARDING_POPOVER_2_HEADER":"メールアドレスがアクティベートされました","ONBOARDING_POPOVER_2_SKIP_CHECKBOX_LABEL":"次回から表示しない","ONBOARDING_POPOVER_3_BODY":"考えが変わりましたか？Gmail の送信済みフォルダーまたは<a href=\'https://secure.virtru.com/control-center\'>Virtru ダッシュボード</a>から、アクセスコントロールまたは更新コントロールを無効にしてください。","ONBOARDING_POPOVER_3_CONFIRM":"完了","ONBOARDING_POPOVER_3_HEADER":"安全なメッセージを初めて送信しました！","ONBOARDING_RESTART_4_BODY":"Virtru がメッセージと添付ファイルを保護します。Virtru による保護の詳細を確認するには、<a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>にアクセスしてください。","ONBOARDING_RESTART_CONFIRM":"ツアーを見る","ONBOARDING_SEND_VERIFICATION":"アクティベーション メールを送信する","ONBOARDING_TOUR_1_BODY":"安全なメッセージを送信する準備ができたら、<span class=\\"bold\\">作成</span>を選んで始めましょう。","ONBOARDING_TOUR_1_HEADER":"メッセージの作成を始める","ONBOARDING_TOUR_2_BODY":"安全なメッセージを送信する必要がある場合は、作成ウィンドウの右上にある Virtru を有効にしてください。たとえ送信する前の下書きであっても保護されます。","ONBOARDING_TOUR_2_HEADER":"Virtru の保護を有効にします","ONBOARDING_TOUR_3_BODY":"有効期限の設定、転送の無効、透かしの添付などにより、安全なメッセージへのアクセスをコントロールすることができます。","ONBOARDING_TOUR_3_HEADER":"セキュリティオプションを追加","ONBOARDING_TOUR_4_BODY":"安全なメッセージには説明文のテキストを入れることができ、受信者がメッセージ全体を復号化せずに確認することができます。その説明文をカスタマイズするには、<span class=\\"bold\\">パーソナライズされた説明文</span>を選択してください。","ONBOARDING_TOUR_4_HEADER":"パーソナライズされた説明文","ONBOARDING_TOUR_CONFIRM":"OK","ONE_CLICK_OPTION":"ワンクリックアクセス","PAGE_ACTIONS_FORMAT_NON_PROD_MESSAGE":"このメッセージは{{acmUrl}}を使用して送信されました","PERSONAL_INTRO_ADD":"パーソナライズされた説明文","PERSONAL_INTRO_ONBOARD":"暗号化されていない説明文をメールに追加します。これにより、受信者はメッセージが本当にあなた自身からのもので、スパムではないと判断できます。","PERSONAL_INTRO_PLACEHOLDER_TEXT":"[メッセージをここに入力します。受信者のみが知っている情報を含めるか、受信者があなたからのメッセージであると判断できるような文を作成します。]","PLAINTEXT_NOT_SUPPORTED_HEADER":"プレーンテキスト モードはサポートされていません","PLAINTEXT_NOT_SUPPORTED_TEXT":"プレーンテキスト モードを無効にしてから続行してください。","PLAINTEXT_NOT_SUPPORTED_TITLE":"送信に失敗しました","POLICY_MENU_DISABLE_FORWARDING":"転送の無効","POLICY_MENU_EXPANDED_WATERMARKING":"透かし","POLICY_MENU_PERSISTENT_PROTECTION":"永続的な保護","POLICY_MENU_WATERMARKING":"PDF に透かしを追加","POLICY_MENU_SUPPORTED_FILES_INFO_TITLE":"サポートされているフォーマット","PROTECTION_REQUIRED":"保護が必要です","PROTECT_AND_SEND":"保護＆送信","READ_RECEIPT_FORWARD_COUNT_DETAILS":"(クリックして詳細を確認)","RECIPIENT":"受信側のフィールド","RECIPIENT_WIDGET_EXPIRATION_DATE":"{{datetime}} に期限切れ","RECIPIENT_WIDGET_EXPIRED":"このメッセージは有効期限が切れました","RECIPIENT_WIDGET_EXPIRED_BODY":"アクセスが期限切れになりました","RECIPIENT_WIDGET_EXPIRED_DATE":"このメッセージは {{datetime}} に有効期限が切れました","RECIPIENT_WIDGET_HEADER":"お読みになっているのは、Virtru で保護された安全なメッセージです","RECIPIENT_WIDGET_NO_EXPIRATION":"有効期限が設定されていません","RECIPIENT_WIDGET_OFFLINE_BODY":"インターネット接続が切断されました","RECIPIENT_WIDGET_OFFLINE_HEADER":"インターネット接続を使用しない安全なメッセージへのアクセスは許可されていません。","RECIPIENT_WIDGET_REVOKED_BODY":"アクセスが取り消されました","RECIPIENT_WIDGET_REVOKED_HEADER":"作成者がお客様のアクセス権を削除しました","RECIPIENT_WIDGET_UNAUTHORIZED_BODY":"このメール アドレスはこのメールを表示することが承認されていません","RECIPIENT_WIDGET_UNAUTHORIZED_HEADER":"このメール アドレスはこのメールを読むことが承認されていません","RESTORE_DRAFT_FAILED":"この下書きの保存で問題が発生しました。ネットワーク接続を確認してもう一度お試しください。","SCREENREADER_CLOSED_POLICY_MENU":"ポリシー メニューを閉じました","SCREENREADER_DISABLED_EXPIRATION":"有効期限を無効にしました","SCREENREADER_DISABLED_FORWARDING":"転送を無効にしました","SCREENREADER_DISABLED_ONECLICK":"ワンクリックアクセスを無効にしました","SCREENREADER_DISABLED_WATERMARK":"透かし追加を無効にしました","SCREENREADER_DISABLED_WATERMARK_PDF":"PDF の透かし追加を無効にしました","SCREENREADER_DISABLED_PFP":"永続的な保護を無効にしました","SCREENREADER_DISABLE_FORWARDING":"転送を無効にする","SCREENREADER_ENABLED_EXPIRATION":"有効期限を有効にしました","SCREENREADER_ENABLED_FORWARDING":"転送を有効にしました","SCREENREADER_ENABLED_ONECLICK":"ワンクリックアクセスを有効にしました","SCREENREADER_ENABLED_WATERMARK":"透かし追加を有効にしました","SCREENREADER_ENABLED_WATERMARK_PDF":"PDF の透かし追加を有効にしました","SCREENREADER_ENABLED_PFP":"永続的な保護を有効にしました","SCREENREADER_EXPIRATION":"有効期限が設定されました","SCREENREADER_ONECLICK":"ワンクリックアクセスを有効にする","SCREENREADER_OPENED_POLICY_MENU":"ポリシーメニューを開きました","SCREENREADER_VIRTRU_POLICY_MENU":"Virtru ポリシー メニュー","SCREENREADER_VIRTRU_SECURE_TOGGLE":"Virtru の安全な切り替え","SCREENREADER_WATERMARK_PDF":"PDF に透かしを追加","SCREENREADER_WATERMARK":"透かし","SCREENREADER_PFP":"永続的な保護","SECURE_EMAIL_COMPOSER_PLACEHOLDER_HTML":"このメール チェーンは Virtru で保護されています。","SECURE_EMAIL_COMPOSER_POLICY_OPTIONS_DEFAULT":"(件名なし)","SECURE_MESSAGE_CONTROL_ENABLE":"有効にする","SECURE_MESSAGE_CONTROL_REVOKE":"取り消し","SECURE_MESSAGE_LABEL":"お読みになっているのは保護されたメッセージです","SECURE_MESSAGE_SENT_NOTIFICATION":"保護されたメッセージを送信しました。","SECURED_ATTACHMENTS_HEADER":"保護された添付ファイル数: {{count}}","SECURED_ATTACHMENTS_HEADER_plural":"保護された添付ファイル数: {{count}}","SENDER_WIDGET_ERROR_ENABLE_MESSAGE":"このメッセージを有効にするための処理でエラーが発生しました。","SENDER_WIDGET_ERROR_REVOCATION":"取り消しの処理でエラーが発生しました。","SENDER_WIDGET_ERROR_UPDATE_POLICY":"ポリシーの更新でエラーが発生しました。","SENDER_WIDGET_EXPIRED_DATE":"{{datetime}} に期限が切れました","SENDER_WIDGET_EXPIRES_DATE":"{{datetime}} に期限切れ","SENDER_WIDGET_MESSAGE_REVOKED":"このメッセージは取り消されました","SENDER_WIDGET_NO_EXPIRATION":"有効期限が設定されていません","SENDER_WIDGET_REVOKED_DATE":"{{datetime}} を取り消しました","SEND_ANIMATION_LOADING_TEXT":"メールを暗号化しています...","SEND_ANYWAY":"このまま送信する","SCHEDULE_SEND":"予約送信","GO_BACK":"戻る","SEND_BLOCK_HEADER":"違反が検出されました","SEND_BLOCK_SUBTEXT":"組織のコンテンツ セキュリティ ポリシーによると、この電子メールには機密情報が含まれているため、Virtru Protection なしでは送信できません。","SEND_WARNING_BUTTON_SEND":"送信","SEND_WARNING_BUTTON_SEND_SECURE":"安全な送信","SEND_WARNING_BUTTON_SEND_SECURE_IMMEDIATELY":"今すぐ安全に送信","SEND_WARNING_WARNING_SEND_SCHEDULED_LABEL":"予約送信機能は、現在 Virtru の保護でサポートされていません。予約送信をするには、安全な送信をするか、機密情報を削除してください。","SEND_WARNING_SCHEDULE_SEND_NOT_SUPPORTED":"予約送信機能は現在サポートされていません。今すぐ安全に送信するか Virtru の保護機能なしで予約送信してください。","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE":"予約送信が利用可能","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE_TOOLTIP":"予約送信機能は、現在 Virtru の保護でサポートされていません","SENSITIVE_DATA_FOUND":"センシティブなデータが見つかりました","WARN_SENSITIVE_DATA_FOUND_BODY":"送信しているメッセージにはセンシティブな情報が含まれています。このメールを送信する前に、 Virtru の保護を有効にするよう組織が推奨しています。","WARN_SENSITIVE_DATA_FOUND_BODY_MAIL_MERGE":"ただし、Virtru の保護は Gmail のメールマージと互換性がありません。この画面で{{button}}を選択し、メールマージを無効にして続行してください。","SENSITIVE_DATA_FOUND_BODY":"送信しているメッセージには機密情報が含まれています。組織が自動的に Virtru の保護を適用しました。","WARN_ATTACHMENTS_LIMIT_REACHED":"添付ファイルの制限数に達しました","ATTACHMENTS_LIMIT_REACHED_BODY":"このメッセージに [ATTACHMENTS_COUNT] のファイルを添付しました。保護されたメッセージごとに、 Virtru は最大 [ATTACHMENTS_LIMIT] の添付ファイルを保護します。この安全なメッセージからファイルを [ATTACHMENTS_REMOVE_COUNT] 削除し、もう一度お試しください。","TOOLTIP_DISABLE_FORWARDING":"転送を無効にする","TOOLTIP_EXPIRATION":"有効期限","TOOLTIP_FORWARDING_RESTRICTED":"転送が制限されています","TOOLTIP_FORWARDING_RESTRICTED_CONTENT":"このチェーンに含まれる安全なメッセージでは転送が制限されています。メッセージに追加された受信者は、転送されたメッセージにアクセスできない場合があります。安全なメッセージの所有者は、新しい受信者へのアクセスを許可する必要があります。","TOOLTIP_ONE_CLICK":"ワンクリックアクセス","TOOLTIP_REAUTHORIZE_BUTTON_CONTENT":"このメッセージは以前に取り消されました。再承認すると、ユーザーが再び表示できるようになります。","TOOLTIP_REAUTHORIZE_BUTTON_TITLE":"メッセージの再承認","TOOLTIP_RECIPIENT_DISABLE_COPY_PASTE":"この Virtru で保護されたメッセージは送信者によって制限されています。コピー/貼り付け機能は使用できません。","TOOLTIP_RECIPIENT_DISABLE_FORWARDING":"この Virtru で保護されたメッセージは送信者によって転送が制限されています。","TOOLTIP_RECIPIENT_DISABLE_PRINT":"この Virtru で保護されたメッセージは送信者によって制限されています。印刷することはできません。","TOOLTIP_RECIPIENT_EXPIRATION":"この Virtru で保護されたメッセージは {{date}} に有効期限が切れます。有効期限が切れた後にメッセージを表示するには、送信者に連絡してください。","TOOLTIP_RECIPIENT_ONE_CLICK":"この Virtru で保護されたメッセージを読むために認証は必要ありません。","TOOLTIP_RECIPIENT_UNAUTHORIZED_INFO":"このメールの元の作成者がこのメッセージへのアクセスを制限しました。そのため、元の作成者から直接このメッセージを受信したのでない場合、コンテンツを表示することはできません。<br><br>アクセスするには、元の作成者に連絡してください。","TOOLTIP_REVOKE_BUTTON_CONTENT":"メッセージへのアクセスを無効にします。あなた以外のユーザーはこのメッセージを表示できなくなります。","TOOLTIP_REVOKE_BUTTON_TITLE":"メッセージの取り消し","TOOLTIP_SECURE_ATTACHMENT_CONTENT":"{{filename}} は Virtru で保護されています","TOOLTIP_SECURE_ATTACHMENT_DOWNLOAD":"復号化とダウンロード","TOOLTIP_SECURE_ATTACHMENT_DRIVE":"Google ドライブへの保存は Virtru がサポートしているものではありません","TOOLTIP_SECURE_ATTACHMENT_TITLE":"Virtru の安全な添付ファイル","TOOLTIP_SENDER_DISABLE_FORWARDING_CONTENT":"受信者はメッセージを転送できなくなります。","TOOLTIP_SENDER_ENABLE_SMS2FA":"このメッセージにアクセスするには SMS 認証が必要です","TOOLTIP_SENDER_EXPIRATION_CONTENT":"{{date}} を過ぎると、受信者はメッセージにアクセスできなくなります。","TOOLTIP_SENDER_ONE_CLICK_CONTENT":"受信者がメッセージを読むために認証は必要ありません。","TOOLTIP_TOGGLE_DISABLED":"安全に送信する権限がありません。ご不明な点がある場合は、管理者にお問い合わせください。","TOOLTIP_SENDER_WATERMARK":"透かし","TOOLTIP_SENDER_WATERMARK_CONTENT":"サポートされている添付ファイルはセキュア リーダー内で透かしが追加されます。","TOOLTIP_SENDER_PFP":"永続的な保護","TOOLTIP_SENDER_PFP_CONTENT":"この設定により、サポートされている添付ファイルがコンピュータにダウンロードされている場合でも認証が必要になります","TOOLTIP_TOGGLE_OFF":"Virtru を使用してメッセージを保護","TOOLTIP_UPSELL_POSTFIX":"<br/><br/>この機能は、Pro バージョンの Virtru で使用できます。","TOOLTIP_VIRTRU_OPTIONS":"セキュリティオプション","UNSECURE_ATTACHMENTS_EXIST_HEADER":"安全でない添付ファイルが存在します","UNSECURE_ATTACHMENTS_EXIST_TEXT":"添付ファイルは検出されましたが、安全に送信することができません。","UNSECURE_ATTACHMENTS_EXIST_TITLE":"送信に失敗しました","UPDATE_MODAL_HEADER":"Virtru は更新されました。","UPDATE_MODAL_REFRESH_BUTTON":"ここをクリックして更新","UPDATE_MODAL_SUBHEADER":"このページを更新して、必ず<br>最新バージョンをお使いください。","VIRTRU_ATTACHMENT_DECRYPTING":"復号化しています","VIRTRU_ATTACHMENT_DOWNLOAD":"ダウンロード","VIRTRU_ATTACHMENT_VIEW":"表示","VIRTRU_ATTACHMENT_REMOVE":"削除","VIRTRU_AUTH_LINK":"Virtru のアクティベート","VIRTRU_AUTH_LINK_REACTIVATE":"Virtru を再アクティブ化する","VIRTRU_CONTACT_US":"IT 管理者に連絡してください","VIRTRU_DISABLED_ON_DOMAIN":"このドメインに対して Virtru は無効化されています","VIRTRU_PROTECTION_NOT_AUTH":"保護を有効にするには Virtru をアクティベートしてください。","VIRTRU_PROTECTION_NOT_AUTH_SHORT":"Virtru をアクティベートしてください。","VIRTRU_PROTECTION_OFF":"Virtru の保護が無効","VIRTRU_PROTECTION_ON":"Virtru の保護が有効","VIRTRU_SECURE_DRAFT_PREFIX":"これは Virtru で保護された下書きです","WEBMAIL_PLUGIN_ACTIVATION_LINK_RETRY":"再送信","WEBMAIL_PLUGIN_ACTIVATION_TEXT":"確認メールが送信されました。<br>少し待ってからこの受信トレイをご確認ください。","WEBMAIL_PLUGIN_INIT_ERROR":"Virtru が正常に初期化できませんでした。原因として、ネットワーク接続エラーやユーザー設定の破損が考えられます。しばらく待ってもう一度更新してみるか、<a href=\\"https://www.virtru.com/contact-us/\\">https://www.virtru.com/contact-us/</a> にアクセスして Virtru カスタマー サポートまでお問い合わせください","WEBMAIL_PLUGIN_INIT_ERROR_HEADER":"Virtru プラグインが初期化に失敗しました","WIDGET_BASE_BODY_REVOKED":"アクセスが拒否されました","WIDGET_BASE_EXPIRATION_OPTIONS_CUSTOM":"カスタム日時の追加","WIDGET_BASE_FOOTER":"Virtru テクノロジーで保護されています","WIDGET_BASE_HEADER_MESSAGE_RECIPIENT":"お読みになっているのは、Virtru で保護された安全なメッセージです","WIDGET_BASE_HEADER_MESSAGE_SENDER":"メッセージは Virtru によって保護されています","WIDGET_BASE_MENU_OPTION_EXPIRES":"有効期限の追加","WIDGET_BASE_MENU_OPTION_FORWARDING":"転送を無効にする","EXPIRATION_UNIT_DAYS":"日","EXPIRATION_UNIT_DAYS_plural":"日","EXPIRATION_UNIT_HOURS":"時間","EXPIRATION_UNIT_HOURS_plural":"時間","EXPIRATION_UNIT_MINS":"分","EXPIRATION_UNIT_MINS_plural":"分","EXPIRATION_UNIT_MONTHS":"月","EXPIRATION_UNIT_MONTHS_plural":"月","EXPIRATION_UNIT_WEEKS":"週","EXPIRATION_UNIT_WEEKS_plural":"週","EXPIRATION_UNIT_YEARS":"年","EXPIRATION_UNIT_YEARS_plural":"年","READ_RECEIPT_FORWARD_COUNT":"<div style=\\"text-align:center;\\">転送{{count}}時刻<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","READ_RECEIPT_FORWARD_COUNT_plural":"<div style=\\"text-align:center;\\">転送{{count}}時刻<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","ATTACHMENTS_TOOLTIP_CONTENT":{"RECIPIENT":{"SUPPORTED_FILE":{"NONE_SECURE":"このファイルは、追加セキュリティオプションを有効にせずに暗号化されています。","EXPANDED_WATERMARKING":"Virtru セキュア リーダーで表示すると、このファイルに透かしが追加されます。","IS_MANAGED":"Virtru セキュア リーダーで表示すると、このファイルに透かしが追加されます。","EXPANDED_IS_MANAGED":"このファイルは追加セキュリティオプションが有効になっており、ダウンロードされたり共有されたとしても透かしが追加され、保護されます。","PERSISTENT_PROTECTION":"このファイルは永続的な保護が有効になっており、ダウンロードされたり共有されたとしても安全です。","EXPANDED_PROTECTION":"このファイルは追加セキュリティオプションが有効になっており、ダウンロードされたり共有されたとしても透かしが追加され、保護されます。"},"UNSUPPORTED_FILE":{"NONE_SECURE":"このファイルは、追加セキュリティオプションを有効にせずに暗号化されています。","EXPANDED_WATERMARKING":"サポートされていないファイル形式のため、追加の保護は有効にできません。","IS_MANAGED":"サポートされていないファイル形式のため、追加の保護は有効にできません。","EXPANDED_IS_MANAGED":"サポートされていないファイル形式のため、追加の保護は有効にできません。","PERSISTENT_PROTECTION":"サポートされていないファイル形式のため、追加の保護は有効にできません。","EXPANDED_PROTECTION":"サポートされていないファイル形式のため、追加の保護は有効にできません。"},"STEPCHILD":"この添付ファイルには、このメッセージとは別に管理されるセキュリティ設定があります。"},"SENDER":{"SUPPORTED_FILE":{"NONE_SECURE":"このファイルは、追加セキュリティオプションを有効にせずに暗号化されています。","EXPANDED_WATERMARKING":"<p>追加セキュリティオプション</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>透かし</p>","IS_MANAGED":"<p>追加セキュリティオプション</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>PDF に透かしを追加</p>","EXPANDED_IS_MANAGED":"<p>追加セキュリティオプション</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>PDF に透かしを追加</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>永続的な保護</p>","PERSISTENT_PROTECTION":"<p>追加セキュリティオプション</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>永続的な保護</p>","EXPANDED_PROTECTION":"<p>追加セキュリティオプション</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>透かし</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>永続的な保護</p>"},"UNSUPPORTED_FILE":{"NONE_SECURE":"このファイルは、追加セキュリティオプションを有効にせずに暗号化されています。","EXPANDED_WATERMARKING":"サポートされていないファイル形式のため、追加の保護は有効にできません。","IS_MANAGED":"サポートされていないファイル形式のため、追加の保護は有効にできません。","EXPANDED_IS_MANAGED":"サポートされていないファイル形式のため、追加の保護は有効にできません。","PERSISTENT_PROTECTION":"サポートされていないファイル形式のため、追加の保護は有効にできません。","EXPANDED_PROTECTION":"サポートされていないファイル形式のため、追加の保護は有効にできません。"},"STEPCHILD":"この添付ファイルには、このメッセージとは別に管理されるセキュリティ設定があります。"}},"ATTACHMENT_SECTION_TOOLTIP_TITLE":"保護された添付ファイル","ATTACHMENT_SECTION_TOOLTIP_CONTENT":"以下の添付ファイルは Virtru によって保護されています。鍵アイコンのあるファイルは永続的な保護が有効で、共有やダウンロード後も保護されます。","ERROR_REFRESH_TOAST_MESSAGE":"Virtru でエラーが発生したため、正常に機能しない可能性があります。続行するにはこのページを更新してください。","CKS_INDICATOR_TITLE":"身元が確認されました","CKS_INDICATOR_BODY":"詐欺被害を防止するため、Virtru によって送信者の身元が確認されました。","CKS_INDICATOR_LINK":"こちらで詳細を確認","MAIL_MERGE_CONFLICT_MODAL_TITLE":"メールマージの競合","MAIL_MERGE_CONFLICT_MODAL_BODY":"Virtruの保護はGmailのメールマージと互換性がありません。続行するには、メールマージをオフにしてください。","MAIL_MERGE_CONFLICT_TOOLTIP":"Virtru保護ではメールマージはサポートされていません"}');

/***/ }),

/***/ 50154:
/***/ ((module, exports, __webpack_require__) => {

var moment = __webpack_require__(13985);
var i18n = __webpack_require__(32841);

// Add fake locale for date&time testing purposes
moment.defineLocale('dev', {
  parentLocale: 'fr'
});
moment.locale(i18n.language);
i18n.on('languageChanged', lang => moment.locale(lang));
module.exports = exports = moment;

/***/ }),

/***/ 55675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(47206);

/***/ }),

/***/ 56119:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Generate fake locale for i18n testing purposes using dictionary
 */
const originalLocale = __webpack_require__(25026);
const brackets = {
  '{': '}',
  '<': '>'
};
const dictionary = {
  a: 'ä',
  b: 'ß',
  c: 'č',
  d: 'đ',
  e: 'ë',
  f: 'ƒ',
  g: 'ğ',
  h: 'ħ',
  i: 'ï',
  j: 'ĵ',
  k: 'ķ',
  l: 'ľ',
  m: 'ṁ',
  n: 'ň',
  o: 'ŏ',
  p: 'Þ',
  q: '§',
  r: 'ř',
  s: 'š',
  t: 'ŧ',
  u: 'ŭ',
  w: 'ŵ',
  v: 'ѷ',
  x: '×',
  y: 'ŷ',
  z: 'ž',
  A: 'Â',
  B: 'Ḃ',
  C: 'Č',
  D: 'Ď',
  E: 'Ê',
  F: 'Ḟ',
  G: 'Ğ',
  H: 'Ĥ',
  I: 'Î',
  J: 'Ĵ',
  K: 'Ǩ',
  L: 'Ĺ',
  M: 'Ṁ',
  N: 'Ñ',
  O: 'Ô',
  P: 'Ṗ',
  Q: 'Ǿ',
  R: 'Ř',
  S: 'Š',
  T: 'Ť',
  U: 'Û',
  W: 'Ŵ',
  V: '◊',
  X: 'χ',
  Y: 'Ŷ',
  Z: 'Ž'
};

/**
 * Replace characters in string using dictionary. Keeps original data between brackets and in HTML tags
 * @param {string} input - The string from original locale
 * @returns {string} - The string with replaced characters
 */
const replaceInString = input => {
  const preserve = [];
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (Object.keys(brackets).includes(input[i])) {
      preserve.push(brackets[input[i]]);
    } else if (input[i] === preserve[preserve.length - 1]) {
      preserve.pop();
    }
    output += !preserve.length && dictionary[input[i]] || input[i];
  }
  return output;
};

/**
 * Replace characters in array
 * @param {Array} input - The array of original strings
 * @returns {Array} - The array of modified strings
 */
const replaceInArray = input => input.map(value => replaceInString(value));

/**
 * Recursive loop for embedded objects
 * @param {string} key - The key of character to replace
 * @param {string} value - The character to replace
 * @returns {string} - The string with replaced characters
 */
const replacer = (key, value) => {
  if (Array.isArray(value)) {
    return replaceInArray(value);
  } else if (typeof value === 'object') {
    const obj = {};
    Object.keys(value).forEach(prop => {
      obj[prop] = replacer(prop, value[prop]);
    });
    return obj;
  } else if (value) {
    return replaceInString(value);
  }
  throw new Error('Incorrect value format');
};

// TO DO: fine tuning
// Removing full strings raises a bug reproduced only in testing phase
// (words 'Today' and 'Tomorrow' displayed in English)
const datetimePropsList = ['MOMENT_CALENDAR_RECIPIENT_EXPIRATION', 'MOMENT_CALENDAR_SENDER_EXPIRED', 'MOMENT_CALENDAR_SENDER_EXPIRING_SOON', 'MOMENT_CALENDAR_POLICY_CONFIG_FULL_DATE'];
const datetimeProps = datetimePropsList.reduce((obj, prop) => {
  obj[prop] = originalLocale[prop];
  return obj;
}, {});
const filteredLocale = datetimePropsList.reduce((obj, prop) => {
  delete obj[prop];
  return obj;
}, originalLocale);

/**
 * Custom JSON parser
 * @type {Object}
 */
const locale = Object.assign(JSON.parse(JSON.stringify(filteredLocale), (key, value) => {
  if (key && value) {
    value = replacer(key, value);
  }
  return value;
}), datetimeProps);
module.exports = exports = locale;

/***/ }),

/***/ 64474:
/***/ ((module, exports, __webpack_require__) => {

const en_US = __webpack_require__(25026);
const fr_FR = __webpack_require__(24361);
const sv_SE = __webpack_require__(85392);
const ja_JP = __webpack_require__(49706);
const dev = __webpack_require__(56119);

/**
 * When adding a new locale, add it also for moment.js in momentLocale property
 * Also check which locale is what in gmail and add to gmailLocale property
 * List of available locales:
 * https://github.com/moment/moment/tree/develop/locale
 */

const locales = {
  'en-US': {
    translation: en_US,
    label: 'English (USA)',
    mobileLabel: 'EN',
    momentLocale: 'en',
    published: true,
    enabled: true
  },
  'fr-FR': {
    translation: fr_FR,
    label: 'Français (France)',
    mobileLabel: 'Fr',
    momentLocale: 'fr',
    published: true,
    enabled: true
  },
  'sv-SE': {
    translation: sv_SE,
    label: 'Swedish',
    mobileLabel: 'Sv',
    momentLocale: 'sv',
    published: true,
    enabled: true
  },
  'ja-JP': {
    translation: ja_JP,
    label: 'Japanese (日本)',
    mobileLabel: 'Ja',
    momentLocale: 'ja',
    published: true
  },
  dev: {
    translation: dev,
    label: 'Development',
    mobileLabel: 'Dev',
    momentLocale: 'fr',
    published: false
  }
};
module.exports = exports = locales;

/***/ }),

/***/ 76223:
/***/ ((module) => {

module.exports = {
  // The selector that finds the TDF within something we believe to be a
  // secure email
  TDF_SELECTOR: 'div pre:contains("--- START PROTECTED MESSAGE TDF")',
  TDF_METADATA_SELECTOR: 'div pre:contains("Virtru Metadata:")',
  SECURE_MESSAGE: '.virtru-open',
  ANIMATION: '.virtru-animation-widget',
  NESTED_SECURE_MESSAGE: '.virtru-nested-secure-message-default',
  DRAFT_SELECTOR: 'input[name*="virtru-secure-draft"]',
  SENDER_HEADER: 'h3.iw span[email]',
  SENDER_EMAIL_HEADER: 'h3.iw .go',
  TIMESTAMP_HEADER: '.gK .g3',
  METADATA_SELECTOR: 'input[name="virtru-metadata"]',
  // Maximum number of attached files
  ATTACHMENTS_LIMIT: 150,
  MAX_RETRY_COUNT: 5,
  UPLOAD_RETRY_DELAY: 2500,
  START_DECRYPTION: 'starting_decryption',
  DONE_DECRYPTION: 'decryption_done',
  DECRYPTION_ANIMATION_START: 'begin_decryption_animation',
  DECRYPTION_ANIMATION_END: 'end_decryption_animation',
  EXTENSION_KEY: 'BP'
};

/***/ }),

/***/ 76463:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(87568);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(64078);
// EXTERNAL MODULE: ./lib/i18n/index.js
var i18n = __webpack_require__(2622);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
// EXTERNAL MODULE: ./lib/utils/index.js
var utils = __webpack_require__(55675);
;// ./lib/utils/connectivity-state.js
class ConnectivityState {
  constructor(window) {
    this._window = window;
    this._isOnline = this._window.navigator.onLine;
    this._onlineCallbacks = new Set();
    this._offlineCallbacks = new Set();
    this._boundOnlineListener = this._onlineListener.bind(this);
    this._boundOfflineListener = this._offlineListener.bind(this);
    this._init();
  }
  isOnline() {
    return this._isOnline;
  }
  isOffline() {
    return !this._isOnline;
  }
  _init() {
    this._window.addEventListener('online', this._boundOnlineListener);
    this._window.addEventListener('offline', this._boundOfflineListener);
  }
  teardown() {
    this._window.removeEventListener('online', this._boundOnlineListener);
    this._window.removeEventListener('offline', this._boundOfflineListener);
    this._onlineCallbacks.clear();
    this._offlineCallbacks.clear();
  }
  _onlineListener(event) {
    this._isOnline = true;
    this._onlineCallbacks.forEach(callback => callback(event));
  }
  _offlineListener(event) {
    this._isOnline = false;
    this._offlineCallbacks.forEach(callback => callback(event));
  }
  whenOnline(callback) {
    this._onlineCallbacks.add(callback);
  }
  whenOffline(callback) {
    this._offlineCallbacks.add(callback);
  }
  onChange(callback) {
    this.whenOnline(callback);
    this.whenOffline(callback);
  }
  dropOnlineListener(callback) {
    this._onlineCallbacks.delete(callback);
  }
  dropOfflineListener(callback) {
    this._offlineCallbacks.delete(callback);
  }
  dropChangeListener(callback) {
    this.dropOnlineListener(callback);
    this.dropOfflineListener(callback);
  }
}
;// ./lib/utils/virtru-offline-mode.js


class VirtruOfflineMode extends ConnectivityState {
  constructor(profile) {
    super(window);
    this._profile = profile;
  }
  _hasPermission() {
    return (0,utils.isFeatureEnabled)(this._profile, 'canUseOffline') || this._profile.auth.status === 'new';
  }

  // Avoid invoking any callbacks if we do not have permission
  _onlineListener(event) {
    if (this._hasPermission()) {
      super._onlineListener(event);
    }
  }
  _offlineListener(event) {
    if (this._hasPermission()) {
      super._offlineListener(event);
    }
  }
  isOffline() {
    return this._hasPermission() && super.isOffline();
  }
  isOnline() {
    return !this.isOffline();
  }
}
;// ./browsers/chrome/lib/popup/popup.js
/* provided dependency */ var console = __webpack_require__(31799);




const Popup = () => {
  const [userId, setUserId] = (0,react.useState)();
  const [activationProvider, setActivationProvider] = (0,react.useState)();
  const [isActive, setIsActive] = (0,react.useState)(false);
  const [isOffline, setIsOffline] = (0,react.useState)(false);
  const launchControlCenter = async () => {
    let dashboardUrl = 'https://secure.virtru.com/control-center/';
    try {
      dashboardUrl = await utils.callContentScript('getDashboardUrl');
    } catch (e) {
      console.log('Cannot fetch Control Center url, using fallback');
    }
    window.open(dashboardUrl, '_blank');
  };
  const activate = async () => {
    const options = {
      userId,
      provider: activationProvider
    };
    const {
      isSaml
    } = await utils.callContentScript('isSaml', options);
    const activationAction = isSaml ? 'runTabsSAMLActivation' : 'runTabsFederatedActivation';
    await utils.callContentScript(activationAction, options);
    window.close();
  };
  const clearActivations = () => {
    utils.callContentScript('clear-activations', {});
    window.close();
  };
  const loadBrowserActionOptions = async () => {
    try {
      const {
        profile,
        activationProvider
      } = await utils.callContentScript('loadBrowserActionOptions');
      const active = profile.auth.status === 'active';
      setUserId(profile.userId);
      setActivationProvider(activationProvider);
      setIsActive(active);
      if (!active) {
        const virtruOfflineMode = new VirtruOfflineMode(profile);
        setIsOffline(virtruOfflineMode.isOffline());
        virtruOfflineMode.teardown();
      }
    } catch (err) {
      setUserId();
      setActivationProvider();
      setIsActive(false);
      setIsOffline(false);
    }
  };
  (0,react.useEffect)(() => {
    const locale = i18n_default().detectLocale();
    i18n_default().setLanguage(locale);
    loadBrowserActionOptions();
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    id: "header",
    "data-testid": "header"
  }, /*#__PURE__*/react.createElement("img", {
    src: "./images/virtru-popout-icon-18.png"
  }), /*#__PURE__*/react.createElement("span", null, i18n_default().t('CHROME_POPUP_ACTIVATION_LABEL'))), /*#__PURE__*/react.createElement("div", {
    className: "page-menu",
    "data-testid": "page-menu"
  }, userId && isActive && /*#__PURE__*/react.createElement("div", {
    className: "activation-label"
  }, /*#__PURE__*/react.createElement("div", {
    className: "activation-label-email"
  }, userId)), userId && !isActive && /*#__PURE__*/react.createElement("a", {
    className: `button ${isOffline ? 'disabled' : ''}`,
    href: "#",
    onClick: activate,
    "data-testid": "activation-link"
  }, i18n_default().t('CHROME_POPUP_ACTIVATION_BUTTON', {
    userId
  })), /*#__PURE__*/react.createElement("a", {
    className: "button",
    href: "#",
    onClick: launchControlCenter
  }, i18n_default().t('CHROME_POPUP_VIRTRU_CONTROL_CENTER_BUTTON'))), /*#__PURE__*/react.createElement("div", {
    className: "browser-menu",
    "data-testid": "browser-menu"
  }, /*#__PURE__*/react.createElement("a", {
    className: "button",
    href: "https://support.virtru.com/hc/en-us",
    target: "_blank",
    rel: "noreferrer"
  }, i18n_default().t('CHROME_POPUP_SUPPORT_BUTTON')), /*#__PURE__*/react.createElement("a", {
    className: "button",
    href: "https://www.virtru.com",
    target: "_blank",
    rel: "noreferrer"
  }, i18n_default().t('CHROME_POPUP_ABOUT_VIRTRU_BUTTON')), userId && isActive && /*#__PURE__*/react.createElement("a", {
    className: "button",
    href: "#",
    onClick: clearActivations,
    "data-testid": "clear-link"
  }, i18n_default().t('CHROME_POPUP_SIGN_OUT_BUTTON')), /*#__PURE__*/react.createElement("a", {
    className: "button",
    href: "https://support.google.com/chromebook/answer/2589434?hl=en",
    target: "_blank",
    rel: "noreferrer"
  }, i18n_default().t('CHROME_POPUP_UNINSTALL_BUTTON')), /*#__PURE__*/react.createElement("a", {
    className: "button",
    href: "https://www.virtru.com/products/integrations/virtru-secure-share-for-drive",
    target: "_blank",
    rel: "noreferrer"
  }, i18n_default().t('CHROME_POPUP_SECURE_SHARE_CROSS_SELL'))));
};
/* harmony default export */ const popup = (Popup);
;// ./browsers/chrome/lib/popup/index.js



const root = (0,client/* createRoot */.H)(document.getElementById('app'));
root.render(/*#__PURE__*/react.createElement(popup, null));

/***/ }),

/***/ 85392:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"ACTIVATION_BUTTON_ACTIVATE":"Aktivera {{currentUser}}","ACTIVATION_BUTTON_REACTIVATE":"Återaktivera {{currentUser}}","ACTIVATION_FAILED":"Aktivering misslyckades","ACTIVATION_FAILED_GENERAL_BODY":"Vi kunde inte aktivera Virtru-skydd. Vänta ett ögonblick och försök igen eller kontakta din administratör.","ACTIVATION_HEADER_USER_NOT_ACTIVATED":"{{currentUser}} är inte aktiverad för att använda Virtru","ACTIVATION_LINK":"Så här fungerar det","ACTIVATION_MESSAGE_DELEGATION_LINK":"Aktivera","ACTIVATION_SUBTEXT":"För att skydda din integritet behöver vi regelbundet verifiera din identitet. Det tar endast en minut och du behöver bara klicka för att återaktivera.","ACTIVATION_TEXT_ACTIVATE":"AKTIVERA VIRTRU FÖR ATT<br>SKRIVA SÄKRA E-POST","ACTIVATION_TEXT_REACTIVATE":"ÅTERAKTIVERA VIRTRU FÖR ATT FORTSÄTTA","ACTIVATION_WAIT_CANCELED":"Virtru kunde inte autentisera ditt e-postkonto eftersom autentiseringsfliken var stängd.<br/><br/>Klicka på länken \\"Försök igen\\" nedan för att starta om processen","ACTIVATION_WAIT_ERROR":"Virtru – Kunde inte autentisera","ACTIVATION_WAIT_FAILED":"Virtru kunde inte autentisera ditt e-postkonto eftersom dina aktuella webbläsarinställningar inte tillåter att cookies skapas eller för att du nekade Virtru till att verifiera din e-postadress.</br><br/>Autentiseringsprocessen kräver cookies. Om du har ändrat din webbläsares standardinställningar för cookies, konfigurera din webbläsare så att den tillåter alla cookies och klicka sedan på knappen \\"Försök igen\\". När ditt konto har autentiserats kan du återaktivera begränsningarna för cookies och fortsätta använda Virtru.</br><br/>Virtru begär behörigheten \\"Se din e-postadress\\" från din webbpostleverantör för att verifiera att du äger det konto som du aktiverar. För mer information om hur vi använder din e-postadress, se våra <a href=\\"https://www.virtru.com/terms-of-service\\" target=\\"_blank\\">Användningsvillkor<a/> och <a href=\\"https://www.virtru.com/privacy-policy\\" target=\\"_blank\\">Integritetspolicy</a>. Klicka på knappen \\"Försök igen\\" för att bevilja denna behörighet.","ACTIVATION_WAIT_HEADER":"Virtru – Autentiserar...","ACTIVATION_WAIT_IN_PRIVATE":"Virtru kunde inte autentisera ditt e-postkonto eftersom din webbläsare är i privat läge, som även kallas \\"inkognito\\"- eller \\"InPrivate\\"-läge. Autentiseringsprocessen kräver cookies, vilka är begränsade i privat läge.</br><br/>Om du vill fortsätta ska du inaktivera det privata läget och återgå till ditt fönster eller din flik till webbposten för att starta om autentiseringsprocessen.</br><br/>När ditt konto har autentiserats kan du återaktivera privat läge och fortsätta använda Virtru.","ACTIVATION_WAIT_MESSAGE":"Virtru autentiserar fortfarande ditt e-postkonto i denna webbläsare. Du kan inte skicka eller läsa säkra meddelanden innan du har slutfört autentiseringen.","ANIMATION_WIDGET_LOADING_TEXT":"Dekrypterar e-post...","ATTACHMENTS_UPLOADING_NO_SEND":"Uppladdningen av bilagor måste slutföras innan du kan skicka.","ATTACHMENT_APPID_ERROR_HEADER":"Aktivering har gått ut","ATTACHMENT_APPID_ERROR_TEXT":"Dina bilagor kan inte laddas upp eftersom din aktivering har gått ut. Vänligen återaktivera och försök igen.","ATTACHMENT_CONNECTION_ERROR_HEADER":"Nätverksfel","ATTACHMENT_CONNECTION_ERROR_TEXT":"Det uppstod ett problem när dina bilagor laddades upp. Kontrollera din anslutning och försök igen.","ATTACHMENT_CONTENT":"Innehåll i bilaga","ATTACHMENT_ERROR_CORRUPT":"Bilagan är korrupt och kan inte dekrypteras. Be avsändaren att skicka bilagan på nytt.","ATTACHMENT_ERROR_UNAUTHORIZED":"Du är inte auktoriserad till att ha åtkomst till denna fil.","ATTACHMENT_ERROR_UNKNOWN":"Ett fel har inträffat och Virtru kan inte ladda ner eller dekryptera denna fil. Försök igen senare.","ATTACHMENT_GENERIC_ERROR_BUTTON":"Avvisa","ATTACHMENT_GENERIC_ERROR_HEADER":"Fel i bilagor","ATTACHMENT_GENERIC_ERROR_TEXT":"Det uppstod ett problem när dina bilagor laddades upp. Kontrollera dina filer, din webbläsare och ditt insticksprogram innan du försöker igen.","ATTACHMENT_INTEGRITY_COMPROMISED":"Virtru kan inte dekryptera denna bilaga. Denna situation uppstår vanligtvis när chiffertexten i ett meddelande har ändrats, vilket gör krypteringen oläsbar.","ATTACHMENT_ERROR_CLOSE_BUTTON":"Stäng","ATTACHMENT_NOT_READY_ERROR":"Bilaga är inte redo","ATTACHMENT_OPTIONS":"Alternativ för bilaga","ATTACHMENT_PFP_ERROR_HEADER":"Fel i bilagor","ATTACHMENT_REVOKED_HEADER":"Åtkomst återkallades","ATTACHMENT_REVOKED_TEXT":"Du har inte längre behörighet att se denna fil","ATTACHMENT_TOO_LARGE_HEADER":"Bilaga är för stor","ATTACHMENT_TOO_LARGE_TEXT":"En eller flera av dina bilagor var för stora för att kunna krypteras. Bifoga filer som är mindre än {{maxSizeMb}} MB.","ATTACHMENT_TOO_LARGE_SUGGEST_SECURE_SHARE_TEXT":"En eller flera av dina bilagor överskrider storleksgränsen för e-postkryptering. Bifoga filer under {{maxSizeMb}} MB eller använd Virtru Secure Share för att skicka filer upp till {{secureShareMaxSize}} GB till dina mottagare på ett säkert sätt.","CANNOT_DECRYPT_GET_HELP":"Läs mer om detta i Virtrus FoS.","CANNOT_DECRYPT_HEADER":"Möjligen ändrat meddelande","CANNOT_DECRYPT_MESSAGE_CKS":"Krypteringsservern {{ownerName}} går inte att nå.<br/>För hjälp, <a href=\\"{{ownerSupportUrl}}\\">kontakta<br/>{{ownerName}} supportdesk</a>.","CANNOT_DECRYPT_MESSAGE_CKS_TROUBLE_READING_EMAIL":"Vi har problem med att läsa ditt e-postmeddelande. Försök igen senare!","CANNOT_DECRYPT_MESSAGE_INTEGRITY_COMPROMISED":"Virtru har upptäckt att detta meddelande kan ha manipulerats. Försök att be <span class=\\"vic-message-bold\\">{{sender}}</span> skicka meddelandet på nytt.","CHROME_POPUP_ABOUT_VIRTRU_BUTTON":"Om Virtru","CHROME_POPUP_ACTIVATION_BUTTON":"Aktivera Virtru för {{userId}}","CHROME_POPUP_ACTIVATION_LABEL":"Virtru e-postskydd","CHROME_POPUP_SIGN_OUT_BUTTON":"Logga ut","CHROME_POPUP_VIRTRU_CONTROL_CENTER_BUTTON":"Kontrollcenter","CHROME_POPUP_SUPPORT_BUTTON":"Support","CHROME_POPUP_UNINSTALL_BUTTON":"Avinstallera","CHROME_POPUP_DRIVE_CROSS_SELL":"Skaffa Virtru för Drive","CHROME_POPUP_SECURE_SHARE_CROSS_SELL":"Skaffa Virtru Secure Share för Drive","COMMON_RETRY_SECURE_SEND":"Prova säker sändning på nytt","COMMON_CANCEL":"Avbryt","COMMON_CLOSE":"Stäng","COMMON_OK":"OK","COMMON_SEND":"Skicka","COMMON_SEND_SECURE":"Säker sändning","COMMON_SEND_SECURE_TOOLTIP_OFFLINE":"Skyddat meddelande kan inte skickas eftersom Virtru är offline","COMMON_TRY_AGAIN":"Försök igen","COMMON_REFRESH":"Uppdatera","COMMON_REFRESH_PAGE":"Uppdatera sida","COMPOSE_ACTIVATION_REQUIRED":"Virtru kräver aktivering","COMPOSE_ATTACHMENTS_UPLOADING_WARN":"Säkert läge kan inte ändras när bilagor laddas upp. Vänta tills uppladdningen av bilagorna är klar och växla sedan till säkert läge.","COMPOSE_DRIVE_ATTACHMENTS_UNSUPPORTED":"Virtru har för närvarande inte stöd för bilagor i Drive. Vill du ta bort dem?","COMPOSE_EXPIRES":"Går ut {{timeRemaining}}","COMPOSE_INSERT_DRIVE_INSERT_FILE":"Infogning av filer från Google Drive stöds inte i säkert läge.","COMPOSE_INSERT_PHOTOS_INLINE_IMAGES":"För närvarande stöder inte Virtru infogade bilder.","COMPOSE_OFF_CONFIRM_REMOVE":"Alla säkra bilagor tas bort om säkert läge stängs av. Är du säker på att du vill göra detta?","CONTENT_IS_MANAGED":"Avsändaren har inaktiverat nedladdning av denna fil.","CONTEXTUAL_ACTIVATE_INFO":"Kontot {{currentUser}} har inte aktiverats med Virtru. Din identitet verifieras när den har aktiverats och Virtru skickar nycklarna till dig så att du kan dekryptera dina säkra meddelanden. Virtru har aldrig åtkomst till något av ditt innehåll.","DISMISS_POPOVER_DEFAULT_OPTIONS_TEXT":"Ok, jag förstår.","DOWNLOAD_ATTACHMENT_DECRYPTING":"Dekrypterar","EMAIL_BODY_CONTENT":"Innehåll i e-postens brödtext","EMAIL_ERROR_EMAIL_CORRUPT":"Meddelandet är korrupt och kan inte dekrypteras. Be avsändaren att skicka meddelandet på nytt.","EMAIL_ERROR_EMAIL_CORRUPT_HEADER":"Korrupt e-post","EMAIL_ERROR_INTERNAL_SERVER_ERROR":"Virtrus servrar svarade inte. Vänta några minuter och försök igen.","EMAIL_ERROR_INTERNAL_SERVER_ERROR_HEADER":"Serverfel","EMAIL_ERROR_NETWORK_LOST":"Virtru kunde inte ansluta till internet. Kontrollera din internetanslutning och försök igen.","EMAIL_ERROR_NETWORK_LOST_HEADER":"Fel på nätverksanslutning","EMAIL_ERROR_READ":"Meddelandet kunde inte dekrypteras. Kontrollera din internetanslutning och försök igen.","EMAIL_ERROR_SEND":"Ett fel inträffade och meddelandet kunde inte skickas. Kontrollera din internetanslutning och försök igen.","EMAIL_ERROR_SMART_SEND_SECURE":"Ett fel inträffade när du försökte skicka ditt meddelande. Kontakta Virtru om problemet kvarstår.","EMAIL_ERROR_SMART_SEND_SECURE_HEADER":"Fel vid sändning","EMAIL_ERROR_TEMPLATE_SUPPORT_LINK":"Virtru Support","EMAIL_ERROR_UNKNOWN":"Virtru har stött på ett fel och kan inte skicka detta meddelande. Uppdatera denna sida och försök igen.","EMAIL_ERROR_UNKNOWN_HEADER":"Okänt fel","EMAIL_ERROR_YOURE_ON_STAGING":"Håll dina hästar … Det ser ut som om du försöker göra en luring och läsa ett e-postmeddelande från fel server (iscensättning/produktion). Kontrollera alternativsidan för att se vilken server du länkar till … du kanske bara länkar till fel server.","EMAIL_ERROR_YOURE_ON_STAGING_HEADER":"Håll dina hästar… Det ser ut som om du försöker göra en luring och läsa ett e-postmeddelande från ","EMAIL_ERROR_SEND_UNKNOWN":"Virtru har stött på ett fel och kan inte skicka detta meddelande. Klicka på knappen nedan för att skicka igen.","EMAIL_ERROR_SEND_UNKNOWN_HEADER":"Okänt fel","EMAIL_ERROR_SEND_REACTIVATION":"Aktiveringen har löpt ut, vänligen aktivera om för att skicka ditt meddelande.","EMAIL_ERROR_SEND_REACTIVATION_HEADER":"Fel vid sändning","EMAIL_ERROR_SEND_REACTIVATION_RETRY_BUTTON":"Återaktivera och skicka","EMAIL_ERROR_READ_SECURE_READER_LABEL":"Klicka här för att se meddelandet i Virtrus Secure Reader","EMAIL_EXPIRATION":"Utgångsdatum","EMAIL_INVALID_ADDRESS":"Adressen \\"{{invalidAddress}}\\" kändes inte igen. Se till att alla adresser är korrekt utformade.","EMAIL_INVALID_ADDRESS_GENERIC":"En eller flera e-postadresser kändes inte igen. Se till att alla adresser är korrekt utformade.","EMAIL_TEMPLATE_FOOTER":"Säkrad av Virtru","EMAIL_TEMPLATE_SENDER_HEADER":"Ditt meddelande som skyddas av Virtru","ENCRYPTED_SEARCH_REMINDER_HEADER":"Krypterad sökning visas inte i dina sökresultat.","ENCRYPTED_SEARCH_REMINDER_SUBTEXT":"Sökning av Virtru-krypterade meddelandekroppar är för närvarande inte aktiverad. Klicka här för att lära dig hur du aktiverar krypterad sökning.","ENHANCEDPDF_DL_DISABLED_TOOLTIP":"Avsändaren har inaktiverat nedladdning av denna fil. Klicka nedan för att se den i Virtrus Secure Reader.","ENHANCEDPDF_DL_DISABLED_TOOLTIP_TITLE":"Förbättrat PDF-skydd","EXPANDED_WATERMARKING_DL_DISABLED_TOOLTIP_TITLE":"Förbättrat skydd","FAQ":"FoS","FEATURE_CHIP_TEXT":"By funktion","FEATURE_ENCRYPTED_SEARCH_FAQ":"Läs mer i våra FoS","FEATURE_ENCRYPTED_SEARCH_POPUP_DESCRIPTION":"För att aktivera sökning av dina Virtru-krypterade e-postmeddelanden klickar du nedan för att gå till fliken \\"Funktioner\\" i Virtru kontrollcenter.","FEATURE_ENCRYPTED_SEARCH_BUTTON":"Gå till kontrollcenter","FEATURE_ENCRYPTED_SEARCH_CANCEL":"Senare","FEATURE_ENCRYPTED_SEARCH_DESCRIPTION":["I Kontrollcenter, gå till fliken Funktioner och aktivera sökning.","Eller gå till vår FoS för att lära dig mer."],"FEATURE_ENCRYPTED_SEARCH_TITLE_TEXT":"Sök efter dina krypterade e-postmeddelanden","FEATURE_ENCRYPTED_SEARCH_SUB_TITLE_TEXT":"Aktivera sökning efter dina Virtru-krypterade e-postmeddelanden","FEATURE_VAULT_BUTTON":"Kom igång","FEATURE_VAULT_CANCEL":"Nej tack","FEATURE_VAULT_DESCRIPTION":["Sök, krypterade e-postmeddelanden och dekryptera dem direkt","Upprätthåll känslighet med Virtru-kryptering","Lätt att upptäcka av auktoriserade parter","Integrerad i ditt befintliga Google-gränssnitt","Kontakta en Virtru-representant för mer information."],"FEATURE_VAULT_TITLE_TEXT":"Sök efter Virtru-e-post i Google Vault","FEATURE_VAULT_SUB_TITLE_TEXT":"Lägg till Google Vault-paketet till din Virtru end-to-end-kryptering","FILE_SIZES":{"BYTES":"b","UNITS":["Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"]},"DELIMITERS":{"DECIMAL":"."},"FIRST_TIME_ONBOARD_LINK_ACTIVATE":"Aktivera","FOOTER_POPOVER_BODY":"Berätta för dina vänner och kollegor att de kan skicka e-post till dig på ett säkert sätt med Virtru.","FOOTER_POPOVER_HEADER":"Kommunicera privat","FOOTER_POPOVER_REMOVE_SIGNATURE":" Ta bort från min e-postsignatur ","FOOTER_PROMO":"Behöver du skicka privat e-postmeddelande till mig? Jag använder","FOOTER_PROMO_USE":"Virtru","FORWARDING_RESTRICTED":"– Begränsad vidarebefordring","GMAIL_BASIC_MODE_UNSUPPORTED_MAIN":"Gmails grundläggande HTML-visning stöds inte","GMAIL_BASIC_MODE_UNSUPPORTED_SUB":"Växla till standardvisningen för att använda Virtru.","GO_TO_SECURE_SHARE":"gå till Secure Share","INTRO_MESSAGE_FOOTER_TEXT":"Text ovanför denna rad krypteras inte.","INVITATION_EMAIL_REPLACE_TEXT_DEFAULT":"Detta är en säker meddelandekedja som skyddas av Virtru.","LEARN_MORE":"Läs mer","LIMITED_ENCRYPTION_BUTTON_CANCEL":"Avbryt","LIMITED_ENCRYPTION_BUTTON_OK":"Fortsätt","LIMITED_ENCRYPTION_CHECKBOX":"Visa inte igen","LIMITED_ENCRYPTION_HEADER":"Begränsat skydd","LIMITED_ENCRYPTION_TEXT":"Ytterligare säkerhetsfunktioner som beständigt skydd och vattenmärkning tillämpas inte på följande bilagor eftersom filtyperna antingen inte stöds eller har säkerhetsinställningar som hanteras separat från detta meddelande:","MESSAGE_OPTIONS":"Meddelandealternativ","MOMENT_CALENDAR_POLICY_CONFIG_FULL_DATE":{"lastDay":"[igår kl.] LT","lastWeek":"[senast] dddd [kl.] LT","nextDay":"[imorgon kl.] LT","nextWeek":"dddd [kl.] LT","sameDay":"[idag kl.] LT","sameElse":"dddd[,] MMM Do[,] YYYY [kl.] LT"},"MOMENT_CALENDAR_RECIPIENT_EXPIRATION":{"lastDay":"[kl.] LT [igår]","lastWeek":"[kl.] LT [senast] dddd","nextDay":"[kl.] LT [imorgon]","nextWeek":"[kl.] LT [på] dddd","sameDay":"[kl.] LT [idag]","sameElse":"[kl.] LT [den] dddd[,] MMM Do[,] YYYY"},"MOMENT_CALENDAR_SENDER_EXPIRED":{"lastDay":"[igår kl.] LT","lastWeek":"[senast] dddd [kl.] LT","nextDay":"[imorgon kl.] LT","nextWeek":"[på] dddd [kl.] LT","sameDay":"[idag kl.] LT","sameElse":"[den] dddd[,] MMM Do[,] YYYY [kl.] LT"},"MOMENT_CALENDAR_SENDER_EXPIRING_SOON":{"lastDay":"LT [igår]","lastWeek":"LT [senast] dddd","nextDay":"LT [imorgon]","nextWeek":"LT [på] dddd","sameDay":"LT [idag]","sameElse":"LT [den] dddd[,] MMM Do[,] YYYY"},"NESTED_MESSAGE_PLACEHOLDER_TEXT_DEFAULT":"Visa senaste säkra meddelande","NESTED_MESSAGE_PLACEHOLDER_TEXT_LOADING":"Laddar säkert meddelande...","NEW_COMPOSE_ARCHIVE_SEND":"Skicka +","NEW_COMPOSE_ARCHIVE_SEND_SECURE":"Säker sändning +","NEW_COMPOSE_DISABLED_WHILE_SECURING":"Inaktiverad när meddelandet (och bilagor) säkras","NEW_MESSAGE_NOT_SECURE":"Nytt meddelande","NEW_FEATURE_POPOVER_PP_BODY":"Virtru kan nu hålla dina filbilagor skyddade när de har delats och laddats ner.<br><br><a href=\'https://support.virtru.com/hc/en-us/articles/360022693153\'>Läs mer</a> om denna funktion, inklusive hur mottagaren upplever den.","NEW_FEATURE_POPOVER_PP_BUTTON":"Avvisa","NEW_FEATURE_POPOVER_PP_LABEL":"Nyhet! Beständigt skydd","NEW_MESSAGE_SECURE":"Nytt säkert meddelande","OFFLINE_MODE_MODAL":{"PROTECTION_OFF":{"ACTION":"Stäng","BODY":"Virtru-skyddet är för närvarande inaktiverat eftersom nätverksanslutningen är offline.","TITLE":"Inget nätverk upptäcktes"},"PROTECTION_ON":{"ACTION":"Stäng","BODY":"Virtru-skyddet är för närvarande inaktiverat eftersom nätverksanslutningen är offline. Eventuella ändringar när du är offline sparas inte.","TITLE":"Inget nätverk upptäcktes"}},"OKGOTIT":"OK, JAG FÖRSTÅR!","ONBOARDING_POPOVER_1_CONFIRM":"Aktivera","ONBOARDING_POPOVER_1_ENTERPRISE_BODY":"Ditt företag använder Virtru för att skydda e-post och hålla sina data privata. Aktivera ditt e-postkonto för att börja skicka säkra meddelanden.","ONBOARDING_POPOVER_1_HEADER":"Välkommen till Virtru","ONBOARDING_POPOVER_1_INDIVIDUAL_BODY":"Med Virtru är det enkelt att skydda e-post och hålla dina data privata. Aktivera ditt e-postkonto för att börja skicka säkra meddelanden.","ONBOARDING_POPOVER_2_BODY":"Du är nu redo att skicka säkra meddelanden från {{currentUser}} med Virtru.","ONBOARDING_POPOVER_2_CONFIRM":"Nästa","ONBOARDING_POPOVER_2_HEADER":"Din e-postadress är aktiverad","ONBOARDING_POPOVER_2_SKIP_CHECKBOX_LABEL":"Visa inte igen","ONBOARDING_POPOVER_3_BODY":"Ändrade du dig? Återkalla åtkomst eller uppdatera kontroller från mappen Skickad mapp i Gmail eller ditt <a href=\'https://secure.virtru.com/control-center\'>Virtru kontrollcenter</a>.","ONBOARDING_POPOVER_3_CONFIRM":"Klar","ONBOARDING_POPOVER_3_HEADER":"Du har skickat ditt första säkra meddelande!","ONBOARDING_RESTART_4_BODY":"Virtru skyddar dina meddelanden och bilagor. För att läsa mer om hur Virtru skyddar dig ska du gå till <a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>.","ONBOARDING_RESTART_4_ORG_BODY":"Virtru-skyddet har ställts in till \\"På\\" av din administratör och skyddar dina meddelanden och bilagor.<br><br>För att läsa mer om hur Virtru skyddar dig ska du gå till <a href=\'https://www.virtru.com/intro/\'>virtru.com/intro</a>.","ONBOARDING_RESTART_4_ORG_HEADING":"Virtru-skydd","ONBOARDING_RESTART_CONFIRM":"Ta en rundtur","ONBOARDING_SEND_VERIFICATION":"Skicka aktivering via e-post","ONBOARDING_TOUR_1_BODY":"När du är redo att skicka ett säkert meddelande ska du välja <span class=\\"bold\\">Skriv</span> för att börja.","ONBOARDING_TOUR_1_HEADER":"Börja skriva ett meddelande","ONBOARDING_TOUR_2_BODY":"När du behöver skicka ett säkert meddelande aktiverar du Virtru längst upp till höger i skrivfönstret. Utkast är också skyddade, även innan du skickar.","ONBOARDING_TOUR_2_HEADER":"Slå på Virtru-skyddet","ONBOARDING_TOUR_3_BODY":"Kontrollera åtkomsten till ditt säkra meddelande: ange ett utgångsdatum, inaktivera vidarebefordring eller vattenstämpla bilagor.","ONBOARDING_TOUR_3_HEADER":"Lägg till säkerhetsalternativ","ONBOARDING_TOUR_4_BODY":"Säkra meddelanden kan innehålla introduktionstext som mottagaren kan se utan att dekryptera hela meddelandet. Du kan anpassa denna introduktion genom att välja <span class=\\"bold\\">Personlig introduktion</span>.","ONBOARDING_TOUR_4_HEADER":"Personlig introduktion","ONBOARDING_TOUR_CONFIRM":"OK","ONE_CLICK_OPTION":"Åtkomst med ett klick","PAGE_ACTIONS_FORMAT_NON_PROD_MESSAGE":"Detta meddelande skickades med {{acmUrl}}","PERSONAL_INTRO_ADD":"Personlig introduktion","ARIA_PERSONAL_INTRO":"Personlig introduktion","PERSONAL_INTRO_ONBOARD":"Lägg till en okrypterad personlig introduktion till ditt privata e-postmeddelande. På så sätt vet mottagarna att ditt meddelande är äkta och inte skräppost.","PERSONAL_INTRO_PLACEHOLDER_TEXT":"[Skriv ditt introduktionsmeddelande här. Inkludera information som endast mottagaren känner till, eller skriv det på ett sådant sätt att de vet att det verkligen är du.]","PLAINTEXT_NOT_SUPPORTED_HEADER":"Klartextläget stöds inte","PLAINTEXT_NOT_SUPPORTED_TEXT":"Stäng av klartextläget innan du fortsätter.","PLAINTEXT_NOT_SUPPORTED_TITLE":"Det gick inte att skicka","POLICY_MENU_DISABLE_FORWARDING":"Inaktivera vidarebefordring","POLICY_MENU_EXPANDED_WATERMARKING":"Vattenmärkning","POLICY_MENU_PERSISTENT_PROTECTION":"Beständigt skydd","POLICY_MENU_WATERMARKING":"PDF-vattenmärkning","POLICY_MENU_SUPPORTED_FILES_INFO_TITLE":"Format med stöd","PROTECTION_REQUIRED":"Skydd krävs","PROTECT_AND_SEND":"Skydda och skicka","READ_RECEIPT_FORWARD_COUNT_DETAILS":"(klicka för mer detaljer)","RECIPIENT":"Mottagarfält","RECIPIENT_WIDGET_EXPIRATION_DATE":"Går ut {{datetime}}","RECIPIENT_WIDGET_EXPIRED":"Detta meddelande har gått ut","RECIPIENT_WIDGET_EXPIRED_BODY":"ÅTKOMST HAR GÅTT UT","RECIPIENT_WIDGET_EXPIRED_DATE":"Detta meddelande har gått ut den {{datetime}}","RECIPIENT_WIDGET_HEADER":"Du läser ett säkert meddelande som skyddas av Virtru","RECIPIENT_WIDGET_NO_EXPIRATION":"Inget utgångsdatum","RECIPIENT_WIDGET_OFFLINE_BODY":"FÖRLORAD INTERNETANSLUTNING","RECIPIENT_WIDGET_OFFLINE_HEADER":"Åtkomst till säkra meddelanden tillåts inte utan en internetanslutning.","RECIPIENT_WIDGET_REVOKED_BODY":"ÅTKOMST ÅTERKALLADES","RECIPIENT_WIDGET_REVOKED_HEADER":"Skaparen har tagit bort din åtkomst","RECIPIENT_WIDGET_UNAUTHORIZED_BODY":"DENNA E-POSTADRESS ÄR INTE AUKTORISERAD TILL ATT VISA DETTA E-POSTMEDDELANDE","RECIPIENT_WIDGET_UNAUTHORIZED_HEADER":"Denna e-postadress är inte auktoriserad till att läsa detta e-postmeddelande","RESTORE_DRAFT_FAILED":"Det förekom ett problem när detta utkast återställdes. Kontrollera din nätverksanslutning och försök igen.","SCREENREADER_CLOSED_POLICY_MENU":"Stängd policymeny","SCREENREADER_DISABLED_EXPIRATION":"Inaktiverade utgångsdatum","SCREENREADER_DISABLED_FORWARDING":"Inaktiverade vidarebefordring","SCREENREADER_DISABLED_ONECLICK":"Inaktiverade åtkomst med ett klick","SCREENREADER_DISABLED_WATERMARK":"Inaktiverade vattenmärke","SCREENREADER_DISABLED_WATERMARK_PDF":"Inaktiverade PDF-vattenmärke","SCREENREADER_DISABLED_PFP":"Inaktiverade beständigt skydd","SCREENREADER_DISABLE_FORWARDING":"Inaktivera vidarebefordring","SCREENREADER_ENABLED_EXPIRATION":"Aktiverade utgångsdatum","SCREENREADER_ENABLED_FORWARDING":"Aktiverade vidarebefordring","SCREENREADER_ENABLED_ONECLICK":"Aktiverade åtkomst med ett klick","SCREENREADER_ENABLED_WATERMARK":"Aktiverade vattenmärke","SCREENREADER_ENABLED_WATERMARK_PDF":"Aktiverade PDF-vattenmärke","SCREENREADER_ENABLED_PFP":"Aktiverade beständigt skydd","SCREENREADER_EXPIRATION":"Utgångsdatum angavs","SCREENREADER_ONECLICK":"Aktivera åtkomst med ett klick","SCREENREADER_OPENED_POLICY_MENU":"Öppnad policymeny","SCREENREADER_VIRTRU_POLICY_MENU":"Säkerhetsalternativ för Virtru","SCREENREADER_VIRTRU_SECURE_TOGGLE":"Säker växling i Virtru","SCREENREADER_WATERMARK_PDF":"PDF-vattenmärke","SCREENREADER_WATERMARK":"Vattenmärke","SCREENREADER_PFP":"Beständigt skydd","SECURE_EMAIL_COMPOSER_PLACEHOLDER_HTML":"Denna e-postkedja har säkrats av Virtru.","SECURE_EMAIL_COMPOSER_POLICY_OPTIONS_DEFAULT":"(Inget ämne)","SECURE_MESSAGE_CONTROL_ENABLE":"Aktivera","SECURE_MESSAGE_CONTROL_REVOKE":"Återkalla","SECURE_MESSAGE_LABEL":"Du läser ett säkrat meddelande","SECURE_MESSAGE_SENT_NOTIFICATION":"Säkert meddelande har skickats.","SECURED_ATTACHMENTS_HEADER":"{{count}} SÄKRADE BILAGA","SECURED_ATTACHMENTS_HEADER_plural":"{{count}} SÄKRADE BILAGOR","SENDER_WIDGET_ERROR_ENABLE_MESSAGE":"Det uppstod ett fel när du aktiverade detta meddelande.","SENDER_WIDGET_ERROR_REVOCATION":"Det uppstod ett fel när du behandlade återkallelsen.","SENDER_WIDGET_ERROR_UPDATE_POLICY":"Det uppstod ett fel när policyn uppdaterades.","SENDER_WIDGET_EXPIRED_DATE":"Har gått ut den {{datetime}}","SENDER_WIDGET_EXPIRES_DATE":"Går ut {{datetime}}","SENDER_WIDGET_MESSAGE_REVOKED":"Detta meddelande har återkallats","SENDER_WIDGET_NO_EXPIRATION":"Inget utgångsdatum","SENDER_WIDGET_REVOKED_DATE":"Återkallade {{datetime}}","SEND_ANIMATION_LOADING_TEXT":"Krypterar e-post...","SEND_ANYWAY":"Skicka ändå","SEND_ANYWAY_OFFLINE":"Placera i kö ändå","SCHEDULE_SEND":"Schemalägg sändning","GO_BACK":"Gå tillbaka","SEND_BLOCK_HEADER":"Överträdelse upptäcktes","SEND_BLOCK_SUBTEXT":"Enligt din organisations säkerhetspolicy för innehåll innehåller detta e-postmeddelandet känslig information och kan inte skickas utan Virtru-skydd.","SEND_WARNING_BUTTON_SEND":"SKICKA","SEND_WARNING_BUTTON_SEND_SECURE":"SKICKA SÄKERT","SEND_WARNING_BUTTON_SEND_SECURE_IMMEDIATELY":"Skicka säkert nu","SEND_WARNING_WARNING_SEND_SCHEDULED_LABEL":"Schemalagd sändning stöds dock inte för närvarande med Virtru-skyddet. Ta antingen bort skicka säkert eller känslig information för att schemalägga sändning.","SEND_WARNING_SCHEDULE_SEND_NOT_SUPPORTED":"Schemalägg sändning stöds för tillfället inte. Skicka säkert nu eller schemalägg sändning utan Virtru-skydd.","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE":"Schemalagd sändning finns inte","SEND_WARNING_WARNING_SCHEDULED_SEND_UNAVAILABLE_TOOLTIP":"Schemalagd sändning stöds inte för närvarande med Virtru-skyddet","SENSITIVE_DATA_FOUND":"Känsliga data hittades","WARN_SENSITIVE_DATA_FOUND_BODY":"Meddelandet du skickar innehåller känslig information. Din organisation rekommenderar att du aktiverar Virtru-skyddet innan du skickar denna e-post.","WARN_SENSITIVE_DATA_FOUND_BODY_ADDITIONAL_OFFLINE":"Du kan skydda och skicka detta utkast när du åter igen har nätverksanslutning eller ställa e-postmeddelandet i kö i utkorgen utan Virtru-skydd.","WARN_SENSITIVE_DATA_FOUND_BODY_OFFLINE":"Meddelandet du skickar innehåller känslig information.","WARN_SENSITIVE_DATA_FOUND_BODY_MAIL_MERGE":"Virtru-skyddet är dock inte kompatibelt med Mail Merge i Gmail. Vänligen välj {{button}} på denna skärm och stäng av Mail Merge för att fortsätta.","SENSITIVE_DATA_FOUND_BODY":"Meddelandet du skickar innehåller känslig information och din organisation har automatiskt tillämpat Virtru-skyddet.","SENSITIVE_DATA_FOUND_BODY_OFFLINE":"Meddelandet du skickar innehåller känslig information.","SENSITIVE_DATA_FOUND_BODY_ADDITIONAL_OFFLINE":"Du kan skydda och skicka utkastet när du åter igen har nätverksanslutning eller ta bort den känsliga informationen för att ställa e-postmeddelandet i kö i utkorgen utan Virtru-skydd.","WARN_ATTACHMENTS_LIMIT_REACHED":"Gränsen för bilagor har nåtts","ATTACHMENTS_LIMIT_REACHED_BODY":"Du har bifogat [ATTACHMENTS_COUNT] filer till detta meddelande. Virtru-skyddet stöder upp till [ATTACHMENTS_LIMIT] bilagor per säkert meddelande. Ta bort [ATTACHMENTS_REMOVE_COUNT] filer från det säkra meddelandet och försök igen.","SMART_SEND_SECURE_STACK_ERROR_HEADER":"Meddelandet kan inte skickas","SMART_SEND_SECURE_STACK_ERROR_BODY":"Detta meddelande överskrider den maximala storleken för kryptering, vanligtvis på grund av antalet svar, vidarebefordringar eller mängden innehåll. Minska storleken på ditt meddelande eller starta en ny konversation. Gå till <a href=\\"https://support.virtru.com/hc/en-us\\" target=\\"blank\\">Virtru Support</a> för mer information.","TOOLTIP_DISABLE_FORWARDING":"Inaktivera vidarebefordring","TOOLTIP_EXPIRATION":"Utgångsdatum","TOOLTIP_EXPIRES":"Går ut: {{date}}","TOOLTIP_FORWARDING_RESTRICTED":"Begränsad vidarebefordring","TOOLTIP_FORWARDING_RESTRICTED_CONTENT":"Vidarebefordring har begränsats för ett säkert meddelande i kedjan. Mottagare som lagts till i ditt meddelande kanske inte kan få åtkomst till det vidarebefordrade meddelandet. Ägaren av det säkra meddelandet måste ge nya mottagare åtkomst till det.","TOOLTIP_ONE_CLICK":"Åtkomst med ett klick","TOOLTIP_REAUTHORIZE_BUTTON_CONTENT":"Detta meddelande har tidigare återkallats. Auktorisera det på nytt för att låta personer se det igen.","TOOLTIP_REAUTHORIZE_BUTTON_TITLE":"Auktorisera meddelande på nytt","TOOLTIP_RECIPIENT_DISABLE_FORWARDING":"Detta Virtru-säkrade meddelande har begränsats från vidarebefordran av dess avsändare.","TOOLTIP_RECIPIENT_EXPIRATION":"Detta Virtru-säkrade meddelande går ut {{date}}. Kontakta avsändaren om du vill se detta meddelande när det gått ut.","TOOLTIP_RECIPIENT_ONE_CLICK":"Detta Virtru-säkrade meddelande kräver inte auktorisering för att läsas.","TOOLTIP_RECIPIENT_UNAUTHORIZED_INFO":"Den ursprungliga författaren av denna e-post har begränsad åtkomst till detta meddelande. Om du inte har fått detta meddelande direkt från den ursprungliga författaren kan du därför inte se dess innehåll.<br><br>Kontakta den ursprungliga författaren för att få åtkomst.","TOOLTIP_REVOKE_BUTTON_CONTENT":"Inaktiverar åtkomst till ditt meddelande. Ingen annan än du kommer att kunna se detta meddelande.","TOOLTIP_REVOKE_BUTTON_TITLE":"Återkalla meddelande","TOOLTIP_SECURE_ATTACHMENT_CONTENT":"{{filename}} har säkrats av Virtru","TOOLTIP_SECURE_ATTACHMENT_DOWNLOAD":"Dekryptera och ladda ner","TOOLTIP_SECURE_ATTACHMENT_DRIVE":"Spara till Google Drive då det inte stöds av Virtru","TOOLTIP_SECURE_ATTACHMENT_TITLE":"Virtru säker bilaga","TOOLTIP_SENDER_DISABLE_FORWARDING_CONTENT":"Denna inställning gör ditt meddelande oläsbart om det har vidarebefordrats","TOOLTIP_SENDER_ENABLE_SMS2FA":"Åtkomst till detta meddelande kräver SMS-verifiering","TOOLTIP_SENDER_EXPIRATION_CONTENT":"Efter den angivna tiden har dina mottagare inte längre åtkomst till detta meddelande","TOOLTIP_SENDER_ONE_CLICK_CONTENT":"Om du slår på denna funktion krävs ingen autentisering för att visa ditt krypterade meddelande","TOOLTIP_TOGGLE_DISABLED":"Du är inte auktoriserad att skicka säkert. Kontakta din administratör om du har några frågor.","TOOLTIP_TOGGLE_ON":"Virtru-skyddet är aktiverat","TOOLTIP_TOGGLE_ON_ORG":"Virtru-skyddet är aktiverat som standard. Du kan inaktivera om det inte krävs.","TOOLTIP_SENDER_WATERMARK":"Vattenmärkning","TOOLTIP_SENDER_WATERMARK_CONTENT":"Bilagor med stöd vattenmärks i Secure Reader","TOOLTIP_SENDER_PFP":"Beständigt skydd","TOOLTIP_SENDER_PFP_CONTENT":"Denna inställning skyddar filer genom att kräva autentisering även om de delas eller laddas ner till en dator","TOOLTIP_TOGGLE_OFF":"Skydda ditt meddelande med Virtru","TOOLTIP_TOGGLE_OFF_OFFLINE":"Virtru-skyddet kan inte aktiveras när du är offline","TOOLTIP_UPSELL_POSTFIX":"<br/><br/>Denna funktion finns i Pro-versionen till Virtru.","TOOLTIP_VIRTRU_OPTIONS":"Säkerhetsalternativ","UNSECURE_ATTACHMENTS_EXIST_HEADER":"Osäkra bilagor finns","UNSECURE_ATTACHMENTS_EXIST_TEXT":"Det går inte att skicka säkert när bilagor upptäcks.","UNSECURE_ATTACHMENTS_EXIST_TITLE":"Det gick inte att skicka","UPDATE_MODAL_HEADER":"Virtru har uppdaterats.","UPDATE_MODAL_REFRESH_BUTTON":"Klicka här för att uppdatera","UPDATE_MODAL_SUBHEADER":"Uppdatera denna sida för att se till att <br>du använder den senaste versionen.","VIRTRU_ATTACHMENT_DECRYPTING":"Dekrypterar","VIRTRU_ATTACHMENT_DOWNLOAD":"Ladda ner","VIRTRU_ATTACHMENT_VIEW":"Visa","VIRTRU_ATTACHMENT_REMOVE":"Ta bort","VIRTRU_AUTH_LINK":"Aktivera Virtru","VIRTRU_AUTH_LINK_REACTIVATE":"Återaktivera Virtru","VIRTRU_CONTACT_US":"Kontakta din IT-administratör","VIRTRU_DISABLED_ON_DOMAIN":"Virtru har inaktiverats för din domän","VIRTRU_PROTECTION_NOT_AUTH":"Virtru måste vara aktiverat för att aktivera skydd.","VIRTRU_PROTECTION_NOT_AUTH_OFFLINE":"Nätverksanslutning krävs för Virtru-aktivering.","VIRTRU_PROTECTION_NOT_AUTH_SHORT":"Aktivera Virtru.","VIRTRU_PROTECTION_ON":"Virtru-skyddet är PÅ","VIRTRU_PROTECTION_OFF":"Virtru-skyddet är AV","VIRTRU_PROTECTION_OFFLINE":"Virtru-skyddet är offline","VIRTRU_SECURE_DRAFT_PREFIX":"Detta är ett utkast som säkrats av Virtru","WEBMAIL_PLUGIN_ACTIVATION_LINK_RETRY":"Skicka igen","WEBMAIL_PLUGIN_ACTIVATION_TEXT":"E-post för verifiering har skickats.<br>Kontrollera denna inkorg inom kort.","WEBMAIL_PLUGIN_INIT_ERROR":"Virtru kunde inte initieras. Detta kan bero på fel i nätverksanslutningen eller en trasig användarkonfiguration. Försök att uppdatera igen om ett tag, eller kontakta Virtru kundsupport på <a href=\\"https://support.virtru.com/hc/en-us/\\">https://support.virtru.com/hc/en-us/</a>","WEBMAIL_PLUGIN_INIT_ERROR_HEADER":"Virtru-insticksprogram kunde inte initieras","WIDGET_BASE_BODY_REVOKED":"ÅTKOMST NEKADES","WIDGET_BASE_EXPIRATION_OPTIONS_CUSTOM":"Lägg till anpassat datum/anppasad tid","WIDGET_BASE_FOOTER":"Säkrad med Virtru-teknik","WIDGET_BASE_HEADER_MESSAGE_RECIPIENT":"Du läser ett säkert meddelande som skyddas av Virtru","WIDGET_BASE_HEADER_MESSAGE_SENDER":"Ditt meddelande som skyddas av Virtru","WIDGET_BASE_MENU_OPTION_EXPIRES":"Lägg till utgångsdatum","WIDGET_BASE_MENU_OPTION_FORWARDING":"Inaktivera vidarebefordring","EXPIRATION_UNIT_DAYS":"dag","EXPIRATION_UNIT_DAYS_plural":"dagar","EXPIRATION_UNIT_HOURS":"timme","EXPIRATION_UNIT_HOURS_plural":"timmar","EXPIRATION_UNIT_MINS":"minut","EXPIRATION_UNIT_MINS_plural":"minuter","EXPIRATION_UNIT_MONTHS":"månad","EXPIRATION_UNIT_MONTHS_plural":"månader","EXPIRATION_UNIT_WEEKS":"vecka","EXPIRATION_UNIT_WEEKS_plural":"veckor","EXPIRATION_UNIT_YEARS":"år","EXPIRATION_UNIT_YEARS_plural":"år","READ_RECEIPT_READBY_COUNT":"Läst av {{accessors}} av {{count}} mottagare","READ_RECEIPT_FORWARD_COUNT":"<div style=\\"text-align:center;\\">Vidarebefordrad {{count}} gång<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","READ_RECEIPT_FORWARD_COUNT_plural":"<div style=\\"text-align:center;\\">Vidarebefordrad {{count}} gånger<br /><span style=\\"font-size:8pt;\\">$t(READ_RECEIPT_FORWARD_COUNT_DETAILS)</span></div>","ATTACHMENTS_TOOLTIP_CONTENT":{"RECIPIENT":{"SUPPORTED_FILE":{"NONE_SECURE":"Denna fil är krypterad och inga ytterligare säkerhetsalternativ är aktiverade.","EXPANDED_WATERMARKING":"Denna fil vattenmärks när den visas i Virtru Secure Reader.","IS_MANAGED":"Denna fil vattenmärks när den visas i Virtru Secure Reader.","EXPANDED_IS_MANAGED":"Denna fil har ytterligare säkerhetsalternativ aktiverade och vattenmärks och skyddas när den laddas ner eller delas.","PERSISTENT_PROTECTION":"Denna fil har beständigt skydd aktiverat och förblir säker när den laddas ner eller delas.","EXPANDED_PROTECTION":"Denna fil har ytterligare säkerhetsalternativ aktiverade och vattenmärks och skyddas när den laddas ner eller delas."},"UNSUPPORTED_FILE":{"NONE_SECURE":"Denna fil är krypterad och inga ytterligare säkerhetsalternativ är aktiverade.","EXPANDED_WATERMARKING":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","IS_MANAGED":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","EXPANDED_IS_MANAGED":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","PERSISTENT_PROTECTION":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","EXPANDED_PROTECTION":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd."},"STEPCHILD":"Denna bilaga har säkerhetsinställningar som hanteras separat från detta meddelande."},"SENDER":{"SUPPORTED_FILE":{"NONE_SECURE":"Denna fil är krypterad och inga ytterligare säkerhetsalternativ är aktiverade.","EXPANDED_WATERMARKING":"<p>Ytterligare säkerhetsalternativ:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Vattenmärkning</p>","IS_MANAGED":"<p>Ytterligare säkerhetsalternativ:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>PDF-vattenmärkning</p>","EXPANDED_IS_MANAGED":"<p>Ytterligare säkerhetsalternativ:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>PDF-vattenmärkning</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Beständigt skydd</p>","PERSISTENT_PROTECTION":"<p>Ytterligare säkerhetsalternativ:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Beständigt skydd</p>","EXPANDED_PROTECTION":"<p>Ytterligare säkerhetsalternativ:</p><p><span class=\\"virtru-attachment-tooltip-icon icon-watermarking\\"></span>Vattenmärkning</p><p><span class=\\"virtru-attachment-tooltip-icon icon-persistent-protection\\"></span>Beständigt skydd</p>"},"UNSUPPORTED_FILE":{"NONE_SECURE":"Denna fil är krypterad och inga ytterligare säkerhetsalternativ är aktiverade.","EXPANDED_WATERMARKING":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","IS_MANAGED":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","EXPANDED_IS_MANAGED":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","PERSISTENT_PROTECTION":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd.","EXPANDED_PROTECTION":"Inget ytterligare skydd aktiverades på grund av filformat utan stöd."},"STEPCHILD":"Denna bilaga har säkerhetsinställningar som hanteras separat från detta meddelande."}},"ATTACHMENT_SECTION_TOOLTIP_TITLE":"Säkrade bilagor","ATTACHMENT_SECTION_TOOLTIP_CONTENT":"Bilagorna nedan är krypterade av Virtru. Filer med låsikonen har aktiverat beständigt skydd och kommer fortfarande att vara skyddade när de har delats eller laddats ner.","ERROR_REFRESH_TOAST_MESSAGE":"Virtru har stött på ett fel och kanske inte fungerar korrekt. Uppdatera denna sida och försök igen.","REATTACH_FILE_WARNING_MESSAGE_POP_IN":"Du behöver bifoga din fil igen. Gå in ändå?","REATTACH_FILE_WARNING_MESSAGE_POP_OUT":"Du behöver bifoga din fil igen. Riva av ändå?","CKS_INDICATOR_TITLE":"Identitet verifierad","CKS_INDICATOR_BODY":"Avsändarens identitet är verifierad av Virtru för att förhindra bedrägerier.","CKS_INDICATOR_LINK":"Läs mer här","MAIL_MERGE_CONFLICT_MODAL_TITLE":"Sammanfogningskonflikt","MAIL_MERGE_CONFLICT_MODAL_BODY":"Virtru-skyddet är inte kompatibelt med sammanslagning av e-post i Gmail. Vänligen stäng av sammanslagningen av e-post för att fortsätta.","MAIL_MERGE_CONFLICT_TOOLTIP":"Sammanslagning av e-post stöds inte med Virtru-skydd"}');

/***/ }),

/***/ 99776:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en-au": 69300,
	"./en-au.js": 69300,
	"./en-ca": 91174,
	"./en-ca.js": 91174,
	"./en-gb": 58199,
	"./en-gb.js": 58199,
	"./en-ie": 7516,
	"./en-ie.js": 7516,
	"./en-il": 39531,
	"./en-il.js": 39531,
	"./en-in": 48493,
	"./en-in.js": 48493,
	"./en-nz": 85070,
	"./en-nz.js": 85070,
	"./en-sg": 58304,
	"./en-sg.js": 58304,
	"./fr": 86078,
	"./fr-ca": 91959,
	"./fr-ca.js": 91959,
	"./fr-ch": 89384,
	"./fr-ch.js": 89384,
	"./fr.js": 86078,
	"./ja": 81375,
	"./ja.js": 81375,
	"./sv": 48279,
	"./sv.js": 48279
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 99776;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 887;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			887: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvirtru_browser_extension"] = self["webpackChunkvirtru_browser_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [99], () => (__webpack_require__(76463)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;