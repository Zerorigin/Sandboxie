<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it_IT">
<context>
    <name>CAdvancedPage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="426"/>
        <source>Advanced Sandbox options</source>
        <translation>Opzioni avanzate dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="427"/>
        <source>On this page advanced sandbox options can be configured.</source>
        <translation>In questa sezione, è possibile configurare le opzioni avanzate per l&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="432"/>
        <source>Network Access</source>
        <translation>Accesso di rete</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="440"/>
        <source>Allow network/internet access</source>
        <translation>Consenti accesso di rete/internet</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="441"/>
        <source>Block network/internet by denying access to Network devices</source>
        <translation>Blocca rete/internet negando l&apos;accesso ai dispositivi di rete</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="443"/>
        <source>Block network/internet using Windows Filtering Platform</source>
        <translation>Blocca rete/internet usando la piattaforma di filtraggio di Windows</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="448"/>
        <source>Allow access to network files and folders</source>
        <translation>Consenti accesso ai file e alle cartelle di rete</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="449"/>
        <location filename="Wizards/NewBoxWizard.cpp" line="465"/>
        <source>This option is not recommended for Hardened boxes</source>
        <translation>Questa opzione non è raccomandata per le aree virtuali ristrette</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="455"/>
        <source>Admin Options</source>
        <translation>Opzioni amministrative</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="459"/>
        <source>Make applications think they are running elevated</source>
        <translation>Fai credere alle applicazioni di avviarsi con privilegi elevati</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="464"/>
        <source>Allow MSIServer to run with a sandboxed system token</source>
        <translation>Consenti l&apos;avvio di Windows Installer con un token di sistema nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="470"/>
        <source>Box Options</source>
        <translation>Opzioni area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="474"/>
        <source>Use a Sandboxie login instead of an anonymous token</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="480"/>
        <source>Prevent sandboxes programs installed on host from loading dll&apos;s from the sandbox</source>
        <translation type="unfinished">Impedisci ai programmi in esecuzione nell&apos;area virtuale (installati sul sistema host) di caricare file DLL</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="481"/>
        <source>This feature may reduce compatibility as it also prevents box located processes from writing to host located ones and even starting them.</source>
        <oldsource>This feature may reduce compatybility as it also prevents box located processes from writing to host located once and even starting them.</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use a Sandboxie login instead of an anonymous token (experimental)</source>
        <translation type="vanished">Usa autenticazione di Sandboxie invece di un token anonimo (sperimentale)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="475"/>
        <source>Using a custom Sandboxie Token allows to isolate individual sandboxes from each other better, and it shows in the user column of task managers the name of the box a process belongs to. Some 3rd party security solutions may however have problems with custom tokens.</source>
        <translation>L&apos;uso di un token di Sandboxie personalizzato consente di isolare meglio le singole aree virtuali e di mostrare nella colonna utente del task manager il nome dell&apos;area virtuale a cui appartiene un processo. Alcune soluzioni di sicurezza di terze parti potrebbero tuttavia avere problemi con i token personalizzati.</translation>
    </message>
</context>
<context>
    <name>CBoxTypePage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="168"/>
        <source>Create new Sandbox</source>
        <translation>Crea nuova area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="175"/>
        <source>A sandbox isolates your host system from processes running within the box, it prevents them from making permanent changes to other programs and data in your computer. The level of isolation impacts your security as well as the compatibility with applications, hence there will be a different level of isolation depending on the selected Box Type. Sandboxie can also protect your personal data from being accessed by processes running under its supervision.</source>
        <translation>Un&apos;area virtuale isola il sistema dai processi avviati nell&apos;area virtuale, impedendogli di effettuare modifiche permanenti ad altri programmi e ai dati presenti nel computer. Il livello di isolamento impatta la tua sicurezza tanto quanto la compatibilità con le applicazioni, quindi ci sarà un livello diverso di isolamento in funzione del tipo di area virtuale selezionata. Sandboxie può anche proteggere i dati personali dall&apos;accesso di processi avviati sotto la sua supervisione.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="184"/>
        <source>Enter box name:</source>
        <translation>Immetti il nome dell&apos;area virtuale:</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="202"/>
        <source>Select box type:</source>
        <translation>Seleziona tipo di area virtuale:</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="205"/>
        <source>Hardened Sandbox with Data Protection</source>
        <translation>Area virtuale ristretta con protezione dati</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="206"/>
        <source>Security Hardened Sandbox</source>
        <translation>Area virtuale ristretta</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="207"/>
        <source>Sandbox with Data Protection</source>
        <translation>Area virtuale con protezione dati</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="208"/>
        <source>Standard Isolation Sandbox (Default)</source>
        <translation>Area virtuale con isolamento standard (Default)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="210"/>
        <source>Application Compartment with Data Protection</source>
        <translation>Compartimento applicazioni con protezione dati</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="211"/>
        <source>Application Compartment (NO Isolation)</source>
        <translation>Compartimento applicazioni (nessun isolamento)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="227"/>
        <source>Remove after use</source>
        <translation>Rimuovi dopo l&apos;uso</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="228"/>
        <source>After the last process in the box terminates, all data in the box will be deleted and the box itself will be removed.</source>
        <translation>Una volta terminato l&apos;ultimo processo nell&apos;area virtuale, tutti i dati presenti verranno eliminati e l&apos;area virtuale stessa verrà rimossa.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="233"/>
        <source>Configure advanced options</source>
        <translation>Configura opzioni avanzate</translation>
    </message>
</context>
<context>
    <name>CBrowserOptionsPage</name>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="844"/>
        <source>Create Web Browser Template</source>
        <translation>Creazione modello browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="845"/>
        <source>Configure web browser template options.</source>
        <translation>Configura le opzioni del browser web.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="855"/>
        <source>Force the Web Browser to run in this sandbox</source>
        <translation>Forza l&apos;avvio del browser Web su quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="859"/>
        <source>Allow direct access to the entire Web Browser profile folder</source>
        <translation>Consenti l&apos;accesso diretto all&apos;intera cartella del profilo del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="863"/>
        <source>Allow direct access to Web Browser&apos;s phishing database</source>
        <translation>Consenti l&apos;accesso diretto al database anti-phishing del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="867"/>
        <source>Allow direct access to Web Browser&apos;s session management</source>
        <translation>Consenti l&apos;accesso diretto alla gestione della sessione del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="871"/>
        <source>Allow direct access to Web Browser&apos;s sync data</source>
        <translation>Consenti l&apos;accesso diretto alla sincronizzazione dati del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="875"/>
        <source>Allow direct access to Web Browser&apos;s preferences</source>
        <translation>Consenti l&apos;accesso diretto alle preferenze del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="879"/>
        <source>Allow direct access to Web Browser&apos;s passwords</source>
        <translation>Consenti l&apos;accesso diretto alle password del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="883"/>
        <source>Allow direct access to Web Browser&apos;s cookies</source>
        <translation>Consenti l&apos;accesso diretto ai cookie del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="887"/>
        <source>Allow direct access to Web Browser&apos;s bookmarks</source>
        <translation>Consenti l&apos;accesso diretto ai segnalibri del browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="891"/>
        <source>Allow direct access to Web Browser&apos;s bookmark and history database</source>
        <translation>Consenti l&apos;accesso diretto al database dei segnalibri e della cronologia del browser Web</translation>
    </message>
</context>
<context>
    <name>CBrowserPathsPage</name>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="517"/>
        <source>Create Web Browser Template</source>
        <translation>Creazione modello browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="518"/>
        <source>Configure your Web Browser&apos;s profile directories.</source>
        <translation>Configura le directory dei profili del browser Web.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="526"/>
        <source>User profile(s) directory:</source>
        <translation>Directory dei profili utente:</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="528"/>
        <source>Show also imperfect matches</source>
        <translation>Mostra anche le corrispondenze imperfette</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="534"/>
        <source>Browser Executable (*.exe)</source>
        <translation>Eseguibile del browser (*.exe)</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="551"/>
        <source>Continue without browser profile</source>
        <translation>Prosegui senza profilo del browser</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="712"/>
        <source>Configure your Gecko based Browsers profile directories.</source>
        <translation>Configura le directory dei profili dei browser basati su Gecko.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="716"/>
        <source>Configure your Chromium based Browsers profile directories.</source>
        <translation>Configura le directory dei profili dei browser basati su Chromium.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="796"/>
        <source>No suitable folders have been found.
Note: you need to run the browser unsandboxed for them to get created.
Please browse to the correct user profile directory.</source>
        <translation>Non sono state trovate cartelle appropriate.
Nota: è necessario eseguire il browser all&apos;esterno dell&apos;area virtuale affinchè vengano create.
Si prega di consultare la directory del profilo utente corretta.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="801"/>
        <source>Please choose the correct user profile directory, if it is not listed you may need to browse to it.</source>
        <translation>Si prega di selezionare la directory del profilo utente corretta. Se non è presente nell&apos;elenco, potrebbe essere necessario navigare al suo interno.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="807"/>
        <source>Please ensure the selected directory is correct, the wizard is not confident in all the presented options.</source>
        <translation>Assicurarsi che la directory selezionata sia corretta, la procedura guidata non è sicura di tutte le opzioni presentate.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="810"/>
        <source>Please ensure the selected directory is correct.</source>
        <translation>Assicurarsi che la directory selezionata sia corretta.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="815"/>
        <source>This path does not look like a valid profile directory.</source>
        <translation>Questo percorso non sembra una directory del profilo valida.</translation>
    </message>
</context>
<context>
    <name>CBrowserTypePage</name>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="325"/>
        <source>Create Web Browser Template</source>
        <translation>Creazione modello browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="326"/>
        <source>Select your Web Browsers main executable, this will allow Sandboxie to identify the browser.</source>
        <translation>Selezionare l&apos;eseguibile principale del vostro browser Web, in modo da consentire a Sandboxie di identificare il browser.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="336"/>
        <source>Enter browser name:</source>
        <translation>Immetti il nome del browser:</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="347"/>
        <source>Main executable (eg. firefox.exe, chrome.exe, msedge.exe, etc...):</source>
        <translation>Eseguibile principale (es. firefox.exe, chrome.exe, msedge.exe, ecc...):</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="351"/>
        <source>Browser executable (*.exe)</source>
        <translation>Eseguibile del browser (*.exe)</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="451"/>
        <source>The browser appears to be Gecko based, like Mozilla Firefox and its derivatives.</source>
        <translation>Il browser sembra essere basato su Gecko, come Mozilla Firefox e i suoi derivati.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="454"/>
        <source>The browser appears to be Chromium based, like Microsoft Edge or Google Chrome and its derivatives.</source>
        <translation>Il browser sembra essere basato su Chromium, come Microsoft Edge o Google Chrome e i suoi derivati.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="457"/>
        <source>Browser could not be recognized, template cannot be created.</source>
        <translation>Il browser non è stato riconosciuto, il modello non può essere creato.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="504"/>
        <source>This browser name is already in use, please choose an other one.</source>
        <translation>Il nome di questo browser è già in uso, si prega di sceglierne un altro.</translation>
    </message>
</context>
<context>
    <name>CCertificatePage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="193"/>
        <source>Install your &lt;b&gt;Sandboxie-Plus&lt;/b&gt; support certificate</source>
        <translation>Installa il certificato di supporto di &lt;b&gt;Sandboxie Plus&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="194"/>
        <source>If you have a supporter certificate, please fill it into the field below.</source>
        <translation>Se sei in possesso di un certificato di supporto, si prega di inserirlo nel campo sottostante.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="216"/>
        <source>Start evaluation without a certificate for a limited period of time.</source>
        <translation>Inizia la valutazione senza certificato per un periodo di tempo limitato.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="244"/>
        <source>To use &lt;b&gt;Sandboxie-Plus&lt;/b&gt; in a business setting, an appropriate &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;support certificate&lt;/a&gt; for business use is required. If you do not yet have the required certificate(s), you can get those from the &lt;a href=&quot;https://xanasoft.com/shop/&quot;&gt;xanasoft.com web shop&lt;/a&gt;.</source>
        <translation>Per utilizzare &lt;b&gt;Sandboxie Plus&lt;/b&gt; in un contesto aziendale, è necessario un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;certificato di supporto&lt;/a&gt; per uso commerciale. Se non si dispone ancora del certificato richiesto, è possibile ottenerlo dal &lt;a href=&quot;https://xanasoft.com/shop/&quot;&gt;negozio web xanasoft.com&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="258"/>
        <source>&lt;b&gt;Sandboxie-Plus&lt;/b&gt; provides additional features and box types exclusively to &lt;u&gt;project supporters&lt;/u&gt;. Boxes like the Privacy Enhanced boxes &lt;b&gt;&lt;font color=&apos;red&apos;&gt;protect user data from illicit access&lt;/font&gt;&lt;/b&gt; by the sandboxed programs. If you are not yet a supporter, then please consider &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt; to ensure further development of Sandboxie and to receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;.</source>
        <translation>&lt;b&gt;Sandboxie Plus&lt;/b&gt; fornisce ulteriori funzionalità e nuovi tipi di aree virtuali esclusivamente ai &lt;u&gt;sostenitori del progetto&lt;/u&gt;. Le aree virtuali con Privacy avanzata &lt;b&gt;&lt;font color=&apos;red&apos;&gt;proteggono i dati utente da accessi non autorizzati&lt;/font&gt;&lt;/b&gt; nei programmi eseguiti.&lt;br /&gt;Se non sei un sostenitore, si prega di &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supportare Sandboxie Plus&lt;/a&gt; per garantirne lo sviluppo e ricevere un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;certificato di supporto&lt;/a&gt;.</translation>
    </message>
</context>
<context>
    <name>CCleanUpJob</name>
    <message>
        <location filename="BoxJob.h" line="36"/>
        <source>Deleting Content</source>
        <translation>Eliminazione del contenuto</translation>
    </message>
</context>
<context>
    <name>CFileBrowserWindow</name>
    <message>
        <location filename="Views/FileView.cpp" line="355"/>
        <source>%1 - Files</source>
        <translation>%1 - File</translation>
    </message>
</context>
<context>
    <name>CFileView</name>
    <message>
        <location filename="Views/FileView.cpp" line="178"/>
        <source>Create Shortcut</source>
        <translation>Crea collegamento</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="184"/>
        <source>Recover to Any Folder</source>
        <translation>Recupera in un&apos;altra cartella</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="186"/>
        <source>Recover to Same Folder</source>
        <translation>Recupera nella stessa cartella</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="190"/>
        <source>Run Recovery Checks</source>
        <translation>Esegui controlli prima del recupero</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="253"/>
        <source>Select Directory</source>
        <translation>Seleziona directory</translation>
    </message>
    <message>
        <location filename="Views/FileView.cpp" line="310"/>
        <source>Create Shortcut to sandbox %1</source>
        <translation>Crea collegamento all&apos;area virtuale %1</translation>
    </message>
</context>
<context>
    <name>CFilesPage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="300"/>
        <source>Sandbox location and behavior</source>
        <translation>Percorso e comportamento dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="301"/>
        <source>On this page the sandbox location and its behavior can be customized.
You can use %USER% to save each users sandbox to an own folder.</source>
        <translation>In questa sezione, il percorso dell&apos;area virtuale e il suo comportamento possono essere personalizzati.
È possibile inserire %USER% per memorizzare ogni utente dell&apos;area virtuale su una propria cartella.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="306"/>
        <source>Sandboxed Files</source>
        <translation>File dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="329"/>
        <source>Select Directory</source>
        <translation>Seleziona directory</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="337"/>
        <source>Virtualization scheme</source>
        <translation>Schema di virtualizzazione</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="341"/>
        <source>Version 1</source>
        <translation>Versione 1</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="342"/>
        <source>Version 2</source>
        <translation>Versione 2</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="348"/>
        <source>Separate user folders</source>
        <translation>Separa cartelle utente</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="353"/>
        <source>Use volume serial numbers for drives</source>
        <translation>Utilizzare i numeri di serie dei volumi per le unità</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="358"/>
        <source>Auto delete content when last process terminates</source>
        <translation>Elimina automaticamente il contenuto dell&apos;area virtuale una volta terminato l&apos;ultimo processo</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="365"/>
        <source>Enable Immediate Recovery of files from recovery locations</source>
        <translation>Attiva recupero immediato dei file dai percorsi di recupero</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="400"/>
        <source>The selected box location is not a valid path.</source>
        <translation>La posizione dell&apos;area virtuale selezionata non è un percorso valido.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="405"/>
        <source>The selected box location exists and is not empty, it is recommended to pick a new or empty folder. Are you sure you want to use an existing folder?</source>
        <translation>La posizione dell&apos;area virtuale selezionata esiste e non è vuota, si consiglia di scegliere una nuova cartella oppure una vuota. Si desidera utilizzare una cartella esistente?</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="410"/>
        <source>The selected box location is not placed on a currently available drive.</source>
        <translation>La posizione dell&apos;area virtuale selezionata non si trova su un&apos;unità attualmente disponibile.</translation>
    </message>
</context>
<context>
    <name>CFinishPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="487"/>
        <source>Complete your configuration</source>
        <translation>Completa la configurazione</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="494"/>
        <source>Almost complete, click Finish to apply all selected options and conclude the wizard.</source>
        <translation>Hai quasi finito, fare clic su Fine per applicare tutte le opzioni selezionate e concludere la configurazione guidata.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="506"/>
        <source>Keep Sandboxie-Plus up to date.</source>
        <translation>Mantieni Sandboxie Plus aggiornato.</translation>
    </message>
</context>
<context>
    <name>CFinishTemplatePage</name>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="936"/>
        <source>Create Web Browser Template</source>
        <translation>Creazione modello browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="944"/>
        <source>Almost complete, click Finish to create a new  Web Browser Template and conclude the wizard.</source>
        <translation>Hai quasi finito, fare clic su Fine per creare un nuovo modello di browser Web e concludere la procedura guidata.</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="962"/>
        <source>Browser name: %1
</source>
        <translation>Nome browser: %1
</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="966"/>
        <source>Browser Type: Gecko (Mozilla Firefox)
</source>
        <translation>Tipo di browser: Gecko (Mozilla Firefox)
</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="967"/>
        <source>Browser Type: Chromium (Google Chrome)
</source>
        <translation>Tipo di browser: Chromium (Google Chrome)
</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="969"/>
        <source>
</source>
        <translation>
</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="970"/>
        <source>Browser executable path: %1
</source>
        <translation>Percorso eseguibile del browser: %1
</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="980"/>
        <source>Browser profile path: %1
</source>
        <translation>Percorso del profilo del browser: %1
</translation>
    </message>
</context>
<context>
    <name>CIntroPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="115"/>
        <source>Introduction</source>
        <translation>Introduzione</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="119"/>
        <source>Welcome to the Setup Wizard. This wizard will help you to configure your copy of &lt;b&gt;Sandboxie-Plus&lt;/b&gt;. You can start this wizard at any time from the Sandbox-&gt;Maintenance menu if you do not wish to complete it now.</source>
        <translation>Benvenuto nella configurazione guidata di &lt;b&gt;Sandboxie Plus&lt;/b&gt;. È possibile avviarla in qualsiasi momento dal menu Area virtuale-&gt;Manutenzione se non si desidera completarla subito.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="128"/>
        <source>Select how you would like to use Sandboxie-Plus</source>
        <translation>Seleziona come si desidera utilizzare Sandboxie Plus</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="131"/>
        <source>&amp;Personally, for private non-commercial use</source>
        <translation>Uso &amp;privato non commerciale</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="136"/>
        <source>&amp;Commercially, for business or enterprise use</source>
        <translation>Uso &amp;commerciale o aziendale</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="141"/>
        <source>Note: this option is persistent</source>
        <translation>Nota: questa opzione non potrà essere cambiata in seguito</translation>
    </message>
</context>
<context>
    <name>CMonitorModel</name>
    <message>
        <location filename="Models/MonitorModel.cpp" line="147"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="Models/MonitorModel.cpp" line="148"/>
        <source>Status</source>
        <translation>Stato</translation>
    </message>
    <message>
        <location filename="Models/MonitorModel.cpp" line="149"/>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <location filename="Models/MonitorModel.cpp" line="150"/>
        <source>Count</source>
        <translation>Conteggio</translation>
    </message>
</context>
<context>
    <name>CMultiErrorDialog</name>
    <message>
        <location filename="Dialogs/MultiErrorDialog.cpp" line="10"/>
        <source>Sandboxie-Plus - Error</source>
        <translation>Sandboxie Plus - Errore</translation>
    </message>
    <message>
        <location filename="Dialogs/MultiErrorDialog.cpp" line="19"/>
        <source>Message</source>
        <translation>Messaggio</translation>
    </message>
</context>
<context>
    <name>CNewBoxWindow</name>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="23"/>
        <source>Sandboxie-Plus - Create New Box</source>
        <translation>Sandboxie Plus - Crea nuova area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="39"/>
        <source>Hardened Sandbox with Data Protection</source>
        <translation>Area virtuale ristretta con protezione dati</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="40"/>
        <source>Security Hardened Sandbox</source>
        <translation>Area virtuale ristretta</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="41"/>
        <source>Sandbox with Data Protection</source>
        <translation>Area virtuale con protezione dati</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="42"/>
        <source>Standard Isolation Sandbox (Default)</source>
        <translation>Area virtuale con isolamento standard (Default)</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="44"/>
        <source>Application Compartment with Data Protection</source>
        <translation>Compartimento applicazioni con protezione dati</translation>
    </message>
    <message>
        <location filename="Windows/NewBoxWindow.cpp" line="45"/>
        <source>Application Compartment (NO Isolation)</source>
        <translation>Compartimento applicazioni (nessun isolamento)</translation>
    </message>
</context>
<context>
    <name>CNewBoxWizard</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="30"/>
        <source>New Box Wizard</source>
        <translation>Creazione guidata dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="138"/>
        <source>The new sandbox has been created using the new &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-delete-v2&quot;&gt;Virtualization Scheme Version 2&lt;/a&gt;, if you experience any unexpected issues with this box, please switch to the Virtualization Scheme to Version 1 and report the issue, the option to change this preset can be found in the Box Options in the Box Structure group.</source>
        <translation>L&apos;area virtuale è stata creata usando il nuovo &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-delete-v2&quot;&gt;schema di virtualizzazione versione 2&lt;/a&gt;. Se si verificano problemi imprevisti, passare allo schema di virtualizzazione versione 1 e segnalare il problema. L&apos;opzione per modificare questa impostazione si trova su Opzioni area virtuale -&gt; Opzioni File nel gruppo Struttura area virtuale.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="141"/>
        <source>Don&apos;t show this message again.</source>
        <translation>Non mostrare più questo messaggio.</translation>
    </message>
</context>
<context>
    <name>COnDeleteJob</name>
    <message>
        <location filename="BoxJob.h" line="58"/>
        <source>OnDelete: %1</source>
        <translation>OnDelete: %1</translation>
    </message>
</context>
<context>
    <name>COnlineUpdater</name>
    <message>
        <location filename="OnlineUpdater.cpp" line="99"/>
        <source>Do you want to check if there is a new version of Sandboxie-Plus?</source>
        <translation>Si desidera controllare se esiste una nuova versione di Sandboxie Plus?</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="100"/>
        <source>Don&apos;t show this message again.</source>
        <translation>Non mostrare più questo messaggio.</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="209"/>
        <source>Checking for updates...</source>
        <translation>Controllo aggiornamenti in corso...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="248"/>
        <source>server not reachable</source>
        <translation>server non raggiungibile</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="249"/>
        <location filename="OnlineUpdater.cpp" line="251"/>
        <source>Failed to check for updates, error: %1</source>
        <translation>Controllo aggiornamenti fallito, errore: %1</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="404"/>
        <source>&lt;p&gt;Do you want to download the installer?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Si desidera scaricare l&apos;installer?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="406"/>
        <source>&lt;p&gt;Do you want to download the updates?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Si desidera scaricare gli aggiornamenti?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="408"/>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;update page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Si desidera aprire la &lt;a href=&quot;%1&quot;&gt;pagina di aggiornamento&lt;/a&gt;?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="416"/>
        <source>Don&apos;t show this update anymore.</source>
        <translation>Non mostrare più questo aggiornamento.</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="534"/>
        <source>Downloading updates...</source>
        <translation>Download in corso degli aggiornamenti...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="560"/>
        <source>invalid parameter</source>
        <translation>parametro non valido</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="561"/>
        <source>failed to download updated information</source>
        <translation>impossibile scaricare informazioni aggiornate</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="562"/>
        <source>failed to load updated json file</source>
        <translation>impossibile caricare il file json aggiornato</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="563"/>
        <source>failed to download a particular file</source>
        <translation>scaricamento file non riuscito</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="564"/>
        <source>failed to scan existing installation</source>
        <translation>impossibile eseguire la scansione dell&apos;installazione esistente</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="565"/>
        <source>updated signature is invalid !!!</source>
        <translation>la firma aggiornata non è valida !!!</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="566"/>
        <source>downloaded file is corrupted</source>
        <translation>il file scaricato è danneggiato</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="567"/>
        <source>internal error</source>
        <translation>errore interno</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="568"/>
        <source>unknown error</source>
        <translation>errore sconosciuto</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="592"/>
        <source>Failed to download updates from server, error %1</source>
        <translation>Impossibile scaricare aggiornamenti dal server, errore %1</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="611"/>
        <source>&lt;p&gt;Updates for Sandboxie-Plus have been downloaded.&lt;/p&gt;&lt;p&gt;Do you want to apply these updates? If any programs are running sandboxed, they will be terminated.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Sono stati scaricati alcuni aggiornamenti per Sandboxie Plus&lt;/p&gt;&lt;p&gt;Si desidera applicarli? Se nell&apos;area virtuale sono in esecuzione altri programmi, questi verranno terminati.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="715"/>
        <source>Downloading installer...</source>
        <translation>Download in corso dell&apos;installer...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="757"/>
        <source>Failed to download installer from: %1</source>
        <translation>Impossibile scaricare l&apos;installer da: %1</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="783"/>
        <source>&lt;p&gt;A new Sandboxie-Plus installer has been downloaded to the following location:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Do you want to begin the installation? If any programs are running sandboxed, they will be terminated.&lt;/p&gt;</source>
        <translation>&lt;p&gt;È stato scaricato un nuovo installer di Sandboxie Plus nel seguente percorso:&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;%2&quot;&gt;%1&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Iniziare l&apos;installazione? Se nell&apos;area virtuale sono in esecuzione altri programmi, questi verranno terminati.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="848"/>
        <source>&lt;p&gt;Do you want to go to the &lt;a href=&quot;%1&quot;&gt;info page&lt;/a&gt;?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Desideri aprire la &lt;a href=&quot;%1&quot;&gt;pagina delle informazioni&lt;/a&gt;?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="856"/>
        <source>Don&apos;t show this announcement in the future.</source>
        <translation>Non mostrare questo avviso in futuro.</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="398"/>
        <source>&lt;p&gt;There is a new version of Sandboxie-Plus available.&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;&lt;b&gt;New version:&lt;/b&gt;&lt;/font&gt; &lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</source>
        <translation>&lt;p&gt;È disponibile una nuova versione di Sandboxie Plus.&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;&lt;b&gt;Nuova versione:&lt;/b&gt;&lt;/font&gt; &lt;b&gt;%1&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="274"/>
        <source>No new updates found, your Sandboxie-Plus is up-to-date.

Note: The update check is often behind the latest GitHub release to ensure that only tested updates are offered.</source>
        <translation>Nessun nuovo aggiornamento trovato, hai l&apos;ultima versione stabile di Sandboxie Plus.

Nota: Il controllo degli aggiornamenti è solitamente indietro rispetto all&apos;ultimo rilascio di GitHub per assicurare che siano offerti solo aggiornamenti testati.</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="964"/>
        <source>Checking for certificate...</source>
        <translation>Controllo del certificato in corso...</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="1004"/>
        <source>No certificate found on server!</source>
        <translation>Nessun certificato trovato sul server!</translation>
    </message>
    <message>
        <location filename="OnlineUpdater.cpp" line="1009"/>
        <source>There is no updated certificate available.</source>
        <translation>Non è disponibile alcun certificato aggiornato.</translation>
    </message>
</context>
<context>
    <name>COptionsWindow</name>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="181"/>
        <source>Sandboxie Plus - &apos;%1&apos; Options</source>
        <translation>Sandboxie Plus - Opzioni &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="41"/>
        <source>Enable the use of win32 hooks for selected processes. Note: You need to enable win32k syscall hook support globally first.</source>
        <translation>Attiva l&apos;uso degli hook Win32 per i processi selezionati. Nota: è necessario prima attivare il supporto degli hook Win32k a livello globale.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="42"/>
        <source>Enable crash dump creation in the sandbox folder</source>
        <translation>Attiva la creazione di crash dump nella cartella Sandbox</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="43"/>
        <source>Always use ElevateCreateProcess fix, as sometimes applied by the Program Compatibility Assistant.</source>
        <translation>Usa sempre la correzione ElevateCreateProcess, a volte applicato dal servizio risoluzione problemi compatibilità programmi.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="45"/>
        <source>Enable special inconsistent PreferExternalManifest behaviour, as needed for some Edge fixes</source>
        <translation>Abilitare il comportamento speciale PreferExternalManifest, precedentemente utile per alcuni problemi con Microsoft Edge</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="46"/>
        <source>Set RpcMgmtSetComTimeout usage for specific processes</source>
        <translation>Imposta l&apos;uso di RpcMgmtSetComTimeout per processi specifici</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="47"/>
        <source>Makes a write open call to a file that won&apos;t be copied fail instead of turning it read-only.</source>
        <translation>Fa fallire una chiamata di scrittura a un file che non verrà copiato, invece di renderlo di sola lettura.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="50"/>
        <source>Make specified processes think they have admin permissions.</source>
        <translation>Fai credere ai processi selezionati di avere i permessi di amministrazione.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="51"/>
        <source>Force specified processes to wait for a debugger to attach.</source>
        <translation>Forza i processi specificati ad attendere l&apos;aggancio di un debugger.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="53"/>
        <source>Sandbox file system root</source>
        <translation>Percorso file system dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="54"/>
        <source>Sandbox registry root</source>
        <translation>Percorso del registro dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="55"/>
        <source>Sandbox ipc root</source>
        <translation>Percorso IPC dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="573"/>
        <source>Add special option:</source>
        <translation>Aggiungi un&apos;opzione speciale:</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="724"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="728"/>
        <source>On Start</source>
        <translation>All&apos;avvio</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="725"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="733"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="737"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="741"/>
        <source>Run Command</source>
        <translation>Avvia comando</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="729"/>
        <source>Start Service</source>
        <translation>Avvia servizio</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="732"/>
        <source>On Init</source>
        <translation>All&apos;inizializzazione</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="736"/>
        <source>On File Recovery</source>
        <translation>Al recupero dei file</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="740"/>
        <source>On Delete Content</source>
        <translation>Alla rimozione del contenuto</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="751"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="773"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="784"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="795"/>
        <source>Please enter the command line to be executed</source>
        <translation>Immettere la riga di comando da eseguire</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="915"/>
        <source>Deny</source>
        <translation>Nega</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="1020"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="19"/>
        <source>This option requires a valid supporter certificate</source>
        <translation>Questa opzione richiede un certificato di supporto</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="22"/>
        <source>Supporter exclusive option</source>
        <translation>Opzione esclusiva per sostenitori</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="47"/>
        <source>Don&apos;t alter the window title</source>
        <translation>Non modificare il titolo della finestra</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="48"/>
        <source>Display [#] indicator only</source>
        <translation>Mostra il simbolo [#]</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="49"/>
        <source>Display box name in title</source>
        <translation>Mostra il nome dell&apos;area virtuale nel titolo</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="51"/>
        <source>Border disabled</source>
        <translation>Bordo disattivato</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="52"/>
        <source>Show only when title is in focus</source>
        <translation>Mostra solo quando il titolo è in primo piano</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="53"/>
        <source>Always show</source>
        <translation>Mostra sempre</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="56"/>
        <source>Hardened Sandbox with Data Protection</source>
        <translation>Area virtuale ristretta con protezione dati</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="57"/>
        <source>Security Hardened Sandbox</source>
        <translation>Area virtuale ristretta</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="58"/>
        <source>Sandbox with Data Protection</source>
        <translation>Area virtuale con protezione dati</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="59"/>
        <source>Standard Isolation Sandbox (Default)</source>
        <translation>Area virtuale con isolamento standard (Default)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="61"/>
        <source>Application Compartment with Data Protection</source>
        <translation>Compartimento applicazioni con protezione dati</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="62"/>
        <source>Application Compartment (NO Isolation)</source>
        <translation>Compartimento applicazioni (nessun isolamento)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="107"/>
        <source>Custom icon</source>
        <translation>Icona personalizzata</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="159"/>
        <source>Version 1</source>
        <translation>Versione 1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="160"/>
        <source>Version 2</source>
        <translation>Versione 2</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="196"/>
        <source>Browse for Program</source>
        <translation>Sfoglia programma</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="256"/>
        <source>Open Box Options</source>
        <translation>Mostra Opzioni area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="257"/>
        <source>Browse Content</source>
        <translation>Sfoglia contenuto</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="258"/>
        <source>Start File Recovery</source>
        <translation>Esegui recupero file</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="259"/>
        <source>Show Run Dialog</source>
        <translation>Mostra finestra di avvio programma</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="292"/>
        <source>Indeterminate</source>
        <translation>Non definito</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="482"/>
        <location filename="Windows/OptionsGeneral.cpp" line="582"/>
        <source>Always copy</source>
        <translation>Copia sempre</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="483"/>
        <location filename="Windows/OptionsGeneral.cpp" line="583"/>
        <source>Don&apos;t copy</source>
        <translation>Non copiare</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="484"/>
        <location filename="Windows/OptionsGeneral.cpp" line="584"/>
        <source>Copy empty</source>
        <translation>Copia vuota</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="446"/>
        <location filename="Windows/OptionsWindow.cpp" line="460"/>
        <location filename="Windows/OptionsAccess.cpp" line="24"/>
        <source>Browse for File</source>
        <translation>Cerca file</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="25"/>
        <source>Browse for Folder</source>
        <translation>Cerca cartella</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="287"/>
        <source>File Options</source>
        <translation>Opzioni file</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="319"/>
        <source>Grouping</source>
        <translation>Raggruppamento</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="525"/>
        <source>Add %1 Template</source>
        <translation>Aggiungi modello %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="625"/>
        <source>Search for options</source>
        <translation>Cerca opzioni</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="755"/>
        <source>Box: %1</source>
        <translation>Area virtuale: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="756"/>
        <source>Template: %1</source>
        <translation>Modello: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="757"/>
        <source>Global: %1</source>
        <translation>Globale: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="758"/>
        <source>Default: %1</source>
        <translation>Default: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="935"/>
        <source>This sandbox has been deleted hence configuration can not be saved.</source>
        <translation>Questa area virtuale è stata cancellata, quindi la configurazione non può essere salvata.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="982"/>
        <source>Some changes haven&apos;t been saved yet, do you really want to close this options window?</source>
        <translation>Alcune modifiche non sono state ancora salvate, vuoi chiudere la finestra opzioni?</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="710"/>
        <source>kilobytes (%1)</source>
        <translation>kilobyte (%1)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="816"/>
        <source>Select color</source>
        <translation>Scegli un colore</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="891"/>
        <source>Select Program</source>
        <translation>Seleziona programma</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="762"/>
        <source>Please enter a service identifier</source>
        <translation>Inserire un identificativo di servizio</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="891"/>
        <source>Executables (*.exe *.cmd)</source>
        <translation>File eseguibili (*.exe *.cmd)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="895"/>
        <location filename="Windows/OptionsGeneral.cpp" line="910"/>
        <source>Please enter a menu title</source>
        <translation>Immetti il nome da assegnare al menu</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGeneral.cpp" line="906"/>
        <source>Please enter a command</source>
        <translation>Immetti un comando</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="994"/>
        <location filename="Windows/OptionsWindow.cpp" line="1012"/>
        <location filename="Windows/OptionsAccess.cpp" line="404"/>
        <location filename="Windows/OptionsAccess.cpp" line="636"/>
        <location filename="Windows/OptionsGeneral.cpp" line="515"/>
        <location filename="Windows/OptionsGeneral.cpp" line="610"/>
        <location filename="Windows/OptionsNetwork.cpp" line="193"/>
        <location filename="Windows/OptionsNetwork.cpp" line="456"/>
        <location filename="Windows/OptionsNetwork.cpp" line="548"/>
        <source>Group: %1</source>
        <translation>Gruppo: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGrouping.cpp" line="141"/>
        <source>Please enter a name for the new group</source>
        <translation>Immetti un nome per il nuovo gruppo</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="1005"/>
        <source>Enter program:</source>
        <translation>Scegli il programma:</translation>
    </message>
    <message>
        <location filename="Windows/OptionsGrouping.cpp" line="229"/>
        <source>Please select group first.</source>
        <translation>Seleziona un gruppo prima di procedere.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="111"/>
        <location filename="Windows/OptionsForce.cpp" line="122"/>
        <source>Process</source>
        <translation>Processo</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="111"/>
        <location filename="Windows/OptionsForce.cpp" line="122"/>
        <source>Folder</source>
        <translation>Cartella</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="222"/>
        <location filename="Windows/OptionsForce.cpp" line="232"/>
        <source>Select Executable File</source>
        <translation>Seleziona file eseguibile</translation>
    </message>
    <message>
        <location filename="Windows/OptionsForce.cpp" line="222"/>
        <location filename="Windows/OptionsForce.cpp" line="232"/>
        <source>Executable Files (*.exe)</source>
        <translation>File eseguibili (*.exe)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="365"/>
        <location filename="Windows/OptionsForce.cpp" line="242"/>
        <location filename="Windows/OptionsForce.cpp" line="252"/>
        <location filename="Windows/OptionsRecovery.cpp" line="128"/>
        <location filename="Windows/OptionsRecovery.cpp" line="139"/>
        <source>Select Directory</source>
        <translation>Seleziona directory</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="312"/>
        <source>Closed</source>
        <translation>Non consentito</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="313"/>
        <source>Closed RT</source>
        <translation>WinRT non consentito</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="314"/>
        <source>Read Only</source>
        <translation>Sola lettura</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="308"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="309"/>
        <source>Open</source>
        <translation>Consenti</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="310"/>
        <source>Open for All</source>
        <translation>Consenti tutto</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="311"/>
        <source>No Rename</source>
        <translation>Nessuna rinomina</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="315"/>
        <source>Box Only (Write Only)</source>
        <translation>Solo area virtuale (sola scrittura)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="316"/>
        <source>Ignore UIPI</source>
        <translation>Ignora UIPI</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="318"/>
        <location filename="Windows/OptionsAccess.cpp" line="335"/>
        <location filename="Windows/OptionsAccess.cpp" line="348"/>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="325"/>
        <source>Regular Sandboxie behavior - allow read and also copy on write.</source>
        <translation>Comportamento regolare di Sandboxie: consenti lettura e copia in scrittura.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="326"/>
        <source>Allow write-access outside the sandbox.</source>
        <translation>Consenti l&apos;accesso in scrittura all&apos;esterno dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="327"/>
        <source>Allow write-access outside the sandbox, also for applications installed inside the sandbox.</source>
        <translation>Consenti l&apos;accesso in scrittura all&apos;esterno dell&apos;area virtuale, anche per le applicazioni installate all&apos;interno dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="328"/>
        <source>Don&apos;t rename window classes.</source>
        <translation>Non rinominare le classi delle finestre.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="329"/>
        <source>Deny access to host location and prevent creation of sandboxed copies.</source>
        <translation>Nega l&apos;accesso alla posizione dell&apos;host e impedisci la creazione di copie nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="330"/>
        <source>Block access to WinRT class.</source>
        <translation>Blocca l&apos;accesso alla classe WinRT.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="331"/>
        <source>Allow read-only access only.</source>
        <translation>Consenti l&apos;accesso in sola lettura.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="332"/>
        <source>Hide host files, folders or registry keys from sandboxed processes.</source>
        <translation>Nascondi i file host, le cartelle o le chiavi di registro dai processi dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="333"/>
        <source>Ignore UIPI restrictions for processes.</source>
        <translation>Ignora restrizioni UIPI per i processi.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="342"/>
        <source>File/Folder</source>
        <translation>File/Cartella</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="343"/>
        <source>Registry</source>
        <translation>Registro</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="344"/>
        <source>IPC Path</source>
        <translation>Percorso IPC</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="345"/>
        <source>Wnd Class</source>
        <translation>Classe finestra</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="346"/>
        <source>COM Object</source>
        <translation>Oggetto COM</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="353"/>
        <source>Select File</source>
        <translation>Seleziona file</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="353"/>
        <source>All Files (*.*)</source>
        <translation>Tutti i file (*.*)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="996"/>
        <location filename="Windows/OptionsAccess.cpp" line="399"/>
        <location filename="Windows/OptionsAccess.cpp" line="632"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="552"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="627"/>
        <location filename="Windows/OptionsGeneral.cpp" line="510"/>
        <location filename="Windows/OptionsGeneral.cpp" line="606"/>
        <location filename="Windows/OptionsNetwork.cpp" line="451"/>
        <location filename="Windows/OptionsNetwork.cpp" line="544"/>
        <location filename="Windows/OptionsNetwork.cpp" line="657"/>
        <source>All Programs</source>
        <translation>Tutti i programmi</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="537"/>
        <source>COM objects must be specified by their GUID, like: {00000000-0000-0000-0000-000000000000}</source>
        <translation>Gli oggetti COM richiedono il rispettivo GUID, come: {00000000-0000-0000-0000-000000000000}</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="543"/>
        <source>RT interfaces must be specified by their name.</source>
        <translation>Le interfacce RT devono essere specificate per nome.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="557"/>
        <source>Opening all IPC access also opens COM access, do you still want to restrict COM to the sandbox?</source>
        <translation>L&apos;apertura di tutti gli accessi IPC aprirà anche l&apos;accesso COM. Limitare l&apos;accesso COM nell&apos;area virtuale?</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="558"/>
        <source>Don&apos;t ask in future</source>
        <translation>Non chiedere in futuro</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="567"/>
        <source>&apos;OpenWinClass=program.exe,#&apos; is not supported, use &apos;NoRenameWinClass=program.exe,*&apos; instead</source>
        <translation>&apos;OpenWinClass=program.exe,#&apos; non è supportato, si prega di usare &apos;NoRenameWinClass=program.exe,*&apos;</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="611"/>
        <location filename="Windows/OptionsAdvanced.cpp" line="603"/>
        <location filename="Windows/OptionsGeneral.cpp" line="577"/>
        <location filename="Windows/OptionsGrouping.cpp" line="234"/>
        <location filename="Windows/OptionsGrouping.cpp" line="258"/>
        <location filename="Windows/OptionsNetwork.cpp" line="523"/>
        <source>Template values can not be edited.</source>
        <translation>I valori predefiniti non possono essere modificati.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAccess.cpp" line="679"/>
        <source>Template values can not be removed.</source>
        <translation>I valori predefiniti non possono essere rimossi.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsRecovery.cpp" line="150"/>
        <source>Please enter a file extension to be excluded</source>
        <translation>Immettere l&apos;estensione del file da escludere</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="833"/>
        <source>Please enter a program file name</source>
        <translation>Immettere il nome del processo (es. nomefile.exe)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="56"/>
        <source>All Categories</source>
        <translation>Tutte le categorie</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="95"/>
        <source>Custom Templates</source>
        <translation>Modelli personalizzati</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="96"/>
        <source>Email Reader</source>
        <translation>Posta elettronica</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="97"/>
        <source>PDF/Print</source>
        <translation>PDF e stampa</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="98"/>
        <source>Security/Privacy</source>
        <translation>Sicurezza/privacy</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="99"/>
        <source>Desktop Utilities</source>
        <translation>Utilità desktop</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="100"/>
        <source>Download Managers</source>
        <translation>Gestione download</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="101"/>
        <source>Miscellaneous</source>
        <translation>Altri programmi</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="102"/>
        <source>Web Browser</source>
        <translation>Browser Web</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="103"/>
        <source>Media Player</source>
        <translation>Lettori multimediali</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="104"/>
        <source>Torrent Client</source>
        <translation>Client Torrent</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="151"/>
        <source>This template is enabled globally. To configure it, use the global options.</source>
        <translation>Questo modello è attivato a livello globale. Per configurarlo, utilizza le opzioni globali.</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="187"/>
        <source>Please enter the template identifier</source>
        <translation>Inserire l&apos;identificativo del modello</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="195"/>
        <source>Error: %1</source>
        <translation>Errore: %1</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="222"/>
        <source>Do you really want to delete the selected local template(s)?</source>
        <translation>Eliminare i modelli locali selezionati?</translation>
    </message>
    <message>
        <location filename="Windows/OptionsTemplates.cpp" line="228"/>
        <source>Only local templates can be removed!</source>
        <translation>Solo i modelli locali possono essere rimossi!</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="37"/>
        <location filename="Windows/OptionsNetwork.cpp" line="578"/>
        <source>Any</source>
        <translation>Qualsiasi</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="38"/>
        <location filename="Windows/OptionsNetwork.cpp" line="579"/>
        <source>TCP</source>
        <translation>TCP</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="39"/>
        <location filename="Windows/OptionsNetwork.cpp" line="580"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="40"/>
        <location filename="Windows/OptionsNetwork.cpp" line="581"/>
        <source>ICMP</source>
        <translation>ICMP</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="53"/>
        <source>Allow access</source>
        <translation>Consenti accesso</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="54"/>
        <source>Block using Windows Filtering Platform</source>
        <translation>Imposta blocco mediante la piattaforma di filtraggio di Windows</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="55"/>
        <source>Block by denying access to Network devices</source>
        <translation>Blocca accesso ai dispositivi di rete</translation>
    </message>
    <message>
        <location filename="Windows/OptionsAdvanced.cpp" line="915"/>
        <location filename="Windows/OptionsNetwork.cpp" line="171"/>
        <location filename="Windows/OptionsNetwork.cpp" line="564"/>
        <source>Allow</source>
        <translation>Consenti</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="172"/>
        <source>Block (WFP)</source>
        <translation>Blocca (WFP)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="173"/>
        <source>Block (NDev)</source>
        <translation>Blocca (NDev)</translation>
    </message>
    <message>
        <location filename="Windows/OptionsNetwork.cpp" line="565"/>
        <source>Block</source>
        <translation>Blocca</translation>
    </message>
</context>
<context>
    <name>CPopUpMessage</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="47"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="48"/>
        <source>Visit %1 for a detailed explanation.</source>
        <translation>Visita %1 per una spiegazione dettagliata.</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="55"/>
        <source>Dismiss</source>
        <translation>Ignora</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="56"/>
        <source>Remove this message from the list</source>
        <translation>Rimuovi questo messaggio dalla lista</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="59"/>
        <source>Hide all such messages</source>
        <translation>Nascondi tutti i messaggi di questo tipo</translation>
    </message>
</context>
<context>
    <name>CPopUpProgress</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="358"/>
        <source>Dismiss</source>
        <translation>Ignora</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="359"/>
        <source>Remove this progress indicator from the list</source>
        <translation>Rimuovi questo indicatore di avanzamento dalla lista</translation>
    </message>
</context>
<context>
    <name>CPopUpPrompt</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="100"/>
        <source>Remember for this process</source>
        <translation>Ricorda per questo processo</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="110"/>
        <source>Yes</source>
        <translation>Sì</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="115"/>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="120"/>
        <source>Terminate</source>
        <translation>Termina</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="141"/>
        <source>Yes and add to allowed programs</source>
        <translation>Sì e aggiungi ai programmi consentiti</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="176"/>
        <source>Requesting process terminated</source>
        <translation>Processo richiedente terminato</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="181"/>
        <source>Request will time out in %1 sec</source>
        <translation>La richiesta scadrà tra %1 secondi</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="183"/>
        <source>Request timed out</source>
        <translation>Richiesta scaduta</translation>
    </message>
</context>
<context>
    <name>CPopUpRecovery</name>
    <message>
        <location filename="Windows/PopUpWindow.h" line="237"/>
        <source>Recover to:</source>
        <translation>Recupera in:</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="242"/>
        <source>Browse</source>
        <translation>Sfoglia</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="243"/>
        <source>Clear folder list</source>
        <translation>Pulisci lista cartelle</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="251"/>
        <source>Recover</source>
        <translation>Recupera</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="252"/>
        <source>Recover the file to original location</source>
        <translation>Recupera il file nello stesso percorso</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="255"/>
        <source>Recover &amp;&amp; Explore</source>
        <translation>Recupera &amp;&amp; Esplora</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="256"/>
        <source>Recover &amp;&amp; Open/Run</source>
        <translation>Recupera &amp;&amp; Apri</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="258"/>
        <source>Open file recovery for this box</source>
        <translation>Apri il recupero file per quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="266"/>
        <source>Dismiss</source>
        <translation>Ignora</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="267"/>
        <source>Don&apos;t recover this file right now</source>
        <translation>Non recuperare questo file adesso</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="270"/>
        <source>Dismiss all from this box</source>
        <translation>Ignora tutto da quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="271"/>
        <source>Disable quick recovery until the box restarts</source>
        <translation>Disattiva recupero veloce fino al riavvio dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.h" line="295"/>
        <source>Select Directory</source>
        <translation>Seleziona directory</translation>
    </message>
</context>
<context>
    <name>CPopUpWindow</name>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="25"/>
        <source>Sandboxie-Plus Notifications</source>
        <translation>Sandboxie Plus - Notifiche</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="162"/>
        <source>Do you want to allow the print spooler to write outside the sandbox for %1 (%2)?</source>
        <translation>Consentire allo spooler di stampa di scrivere all&apos;esterno dell&apos;area virtuale per %1 (%2)?</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="270"/>
        <source>Do you want to allow %4 (%5) to copy a %1 large file into sandbox: %2?
File name: %3</source>
        <translation>Consentire a %4 (%5) di copiare un file di %1 nell&apos;area virtuale %2?
Nome del file: %3</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="276"/>
        <source>Do you want to allow %1 (%2) access to the internet?
Full path: %3</source>
        <translation>Consentire l&apos;accesso a internet per %1 (%2)?
Percorso completo: %3</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="335"/>
        <source>%1 is eligible for quick recovery from %2.
The file was written by: %3</source>
        <translation>%1 è idoneo per il recupero veloce da %2.
Il file è stato scritto da: %3</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="337"/>
        <source>an UNKNOWN process.</source>
        <translation>un processo SCONOSCIUTO.</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="337"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="421"/>
        <location filename="Windows/PopUpWindow.cpp" line="422"/>
        <source>UNKNOWN</source>
        <translation>SCONOSCIUTO</translation>
    </message>
    <message>
        <location filename="Windows/PopUpWindow.cpp" line="428"/>
        <source>Migrating a large file %1 into the sandbox %2, %3 left.
Full path: %4</source>
        <translation>Copia file di %1 nell&apos;area virtuale %2, %3 rimasti.
Percorso completo: %4</translation>
    </message>
</context>
<context>
    <name>CRecoveryLogWnd</name>
    <message>
        <location filename="SandManRecovery.cpp" line="306"/>
        <source>Sandboxie-Plus - Recovery Log</source>
        <translation>Sandboxie Plus - Log di recupero</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="317"/>
        <source>Time|Box Name|File Path</source>
        <translation>Ora|Area virtuale|Percorso file</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="319"/>
        <source>Cleanup Recovery Log</source>
        <translation>Pulisci log di recupero</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="329"/>
        <source>The following files were recently recovered and moved out of a sandbox.</source>
        <translation>I seguenti file sono stati recuperati di recente e spostati all&apos;esterno dell&apos;area virtuale.</translation>
    </message>
</context>
<context>
    <name>CRecoveryWindow</name>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="46"/>
        <source>%1 - File Recovery</source>
        <translation>%1 - Recupero File</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="70"/>
        <source>File Name</source>
        <translation>Nome file</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="71"/>
        <source>File Size</source>
        <translation>Dimensione file</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="72"/>
        <source>Full Path</source>
        <translation>Percorso completo</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="106"/>
        <source>Remember target selection</source>
        <translation>Ricorda destinazione selezionata</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="112"/>
        <source>Delete everything, including all snapshots</source>
        <translation>Elimina tutto, comprese le istantanee</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="138"/>
        <source>Original location</source>
        <translation>Percorso originale</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="139"/>
        <source>Browse for location</source>
        <translation>Sfoglia percorso</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="140"/>
        <source>Clear folder list</source>
        <translation>Pulisci lista cartelle</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="180"/>
        <location filename="Windows/RecoveryWindow.cpp" line="201"/>
        <location filename="Windows/RecoveryWindow.cpp" line="552"/>
        <source>Select Directory</source>
        <translation>Seleziona directory</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="248"/>
        <source>Do you really want to delete %1 selected files?</source>
        <translation>Eliminare i file selezionati (%1)?</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="276"/>
        <source>Close until all programs stop in this box</source>
        <translation>Non mostrare di nuovo fino all&apos;arresto di tutti i programmi</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="277"/>
        <source>Close and Disable Immediate Recovery for this box</source>
        <translation>Chiudi e disattiva il recupero immediato per quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="297"/>
        <source>There are %1 new files available to recover.</source>
        <translation>Ci sono %1 nuovi file disponibili per il recupero.</translation>
    </message>
    <message>
        <location filename="Windows/RecoveryWindow.cpp" line="588"/>
        <source>There are %1 files and %2 folders in the sandbox, occupying %3 of disk space.</source>
        <translation>Ci sono %1 file e %2 cartelle nell&apos;area virtuale, che occupano %3 di spazio su disco.</translation>
    </message>
</context>
<context>
    <name>CSandBox</name>
    <message>
        <location filename="SandMan.cpp" line="3365"/>
        <source>Waiting for folder: %1</source>
        <translation>In attesa della cartella: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3366"/>
        <source>Deleting folder: %1</source>
        <translation>Eliminazione della cartella: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3367"/>
        <source>Merging folders: %1 &amp;gt;&amp;gt; %2</source>
        <translation>Unione cartelle: %1 &gt;&gt; %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3368"/>
        <source>Finishing Snapshot Merge...</source>
        <translation>Completamento unione istantanea...</translation>
    </message>
</context>
<context>
    <name>CSandBoxPlus</name>
    <message>
        <location filename="SbiePlusAPI.cpp" line="638"/>
        <source>Disabled</source>
        <translation>Disattivata</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="649"/>
        <source>OPEN Root Access</source>
        <translation>Accesso root APERTO</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="651"/>
        <source>Application Compartment</source>
        <translation>Compartimento applicazioni</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="653"/>
        <source>NOT SECURE</source>
        <translation>NON SICURA</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="655"/>
        <source>Reduced Isolation</source>
        <translation>Isolamento ridotto</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="657"/>
        <source>Enhanced Isolation</source>
        <translation>Isolamento avanzato</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="660"/>
        <source>Privacy Enhanced</source>
        <translation>Privacy avanzata</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="663"/>
        <source>API Log</source>
        <translation>API Log</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="665"/>
        <source>No INet</source>
        <translation>No INet</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="667"/>
        <source>Net Share</source>
        <translation>Condivisione di rete</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="669"/>
        <source>No Admin</source>
        <translation>No Admin</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="672"/>
        <source>Auto Delete</source>
        <translation>Autoelimina contenuto</translation>
    </message>
    <message>
        <location filename="SbiePlusAPI.cpp" line="675"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
</context>
<context>
    <name>CSandMan</name>
    <message>
        <location filename="SandMan.cpp" line="176"/>
        <location filename="SandMan.cpp" line="1784"/>
        <source>Sandboxie-Plus v%1</source>
        <translation>Sandboxie Plus v%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="815"/>
        <source>&lt;a href=&quot;sbie://update/installer&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus release %1 ready&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;sbie://update/installer&quot; style=&quot;color: red;&quot;&gt;Una nuova versione %1 di Sandboxie Plus è pronta per essere installata&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="819"/>
        <source>&lt;a href=&quot;sbie://update/apply&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus update %1 ready&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;sbie://update/apply&quot; style=&quot;color: red;&quot;&gt;Un nuovo aggiornamento %1 di Sandboxie Plus è pronto da installare&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3254"/>
        <source>Reset Columns</source>
        <translation>Reimposta colonne</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3255"/>
        <source>Copy Cell</source>
        <translation>Copia cella</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3256"/>
        <source>Copy Row</source>
        <translation>Copia riga</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3257"/>
        <source>Copy Panel</source>
        <translation>Copia riquadro</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="986"/>
        <source>Time|Message</source>
        <translation>Ora|Messaggio</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="994"/>
        <source>Sbie Messages</source>
        <translation>Messaggi di Sandboxie</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1001"/>
        <source>Trace Log</source>
        <translation>Log di accesso</translation>
    </message>
    <message>
        <location filename="SandManTray.cpp" line="45"/>
        <source>Show/Hide</source>
        <translation>Mostra/Nascondi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="462"/>
        <location filename="SandMan.cpp" line="668"/>
        <source>&amp;Sandbox</source>
        <translation>&amp;Area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="463"/>
        <source>Create New Box</source>
        <translation>Crea nuova area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="464"/>
        <source>Create Box Group</source>
        <translation>Aggiungi gruppo</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="468"/>
        <location filename="SandMan.cpp" line="602"/>
        <source>Terminate All Processes</source>
        <translation>Chiudi tutti i processi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="473"/>
        <source>Disable File Recovery</source>
        <translation>Sospendi recupero dei file</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="476"/>
        <source>Disable Message Popup</source>
        <translation>Sospendi messaggi popup</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="404"/>
        <source>&amp;Maintenance</source>
        <translation>&amp;Manutenzione</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="405"/>
        <source>Connect</source>
        <translation>Connetti</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="406"/>
        <source>Disconnect</source>
        <translation>Disconnetti</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="408"/>
        <source>Stop All</source>
        <translation>Ferma tutto</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="409"/>
        <source>&amp;Advanced</source>
        <translation>&amp;Avanzate</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="410"/>
        <source>Install Driver</source>
        <translation>Installa driver</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="411"/>
        <source>Start Driver</source>
        <translation>Avvia driver</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="412"/>
        <source>Stop Driver</source>
        <translation>Ferma driver</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="413"/>
        <source>Uninstall Driver</source>
        <translation>Rimuovi driver</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="415"/>
        <source>Install Service</source>
        <translation>Installa servizio</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="416"/>
        <source>Start Service</source>
        <translation>Avvia servizio</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="417"/>
        <source>Stop Service</source>
        <translation>Ferma servizio</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="418"/>
        <source>Uninstall Service</source>
        <translation>Rimuovi servizio</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="420"/>
        <source>Setup Wizard</source>
        <translation>Configurazione guidata</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="423"/>
        <source>Uninstall All</source>
        <translation>Disinstalla tutto</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="509"/>
        <location filename="SandMan.cpp" line="638"/>
        <source>Exit</source>
        <translation>Esci</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="512"/>
        <location filename="SandMan.cpp" line="640"/>
        <source>&amp;View</source>
        <translation>&amp;Visualizza</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="429"/>
        <source>Simple View</source>
        <translation>Interfaccia semplice</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="430"/>
        <source>Advanced View</source>
        <translation>Interfaccia avanzata</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="435"/>
        <source>Always on Top</source>
        <translation>Sempre in primo piano</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="519"/>
        <source>Show Hidden Boxes</source>
        <translation>Mostra aree virtuali nascoste</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="521"/>
        <source>Show All Sessions</source>
        <translation>Mostra tutte le sessioni</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="538"/>
        <source>Refresh View</source>
        <translatorcomment>Refresh View aggiorna le dimensioni delle aree virtuali nella colonna informazioni.</translatorcomment>
        <translation>Aggiorna dimensioni aree virtuali</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="544"/>
        <source>Clean Up</source>
        <translation>Pulizia</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="545"/>
        <source>Cleanup Processes</source>
        <translatorcomment>Entra in funzione solo se viene attivata l&apos;opzione &apos;Mantieni lo stato terminato dei processi&apos;</translatorcomment>
        <translation>Rimuovi i processi dallo stato terminato</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="547"/>
        <source>Cleanup Message Log</source>
        <translation>Pulisci log dei messaggi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="548"/>
        <source>Cleanup Trace Log</source>
        <translation>Pulisci log di accesso</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="549"/>
        <source>Cleanup Recovery Log</source>
        <translation>Pulisci log di recupero</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="551"/>
        <source>Keep terminated</source>
        <translatorcomment>Attivando questa opzione, i processi terminati resteranno in primo piano anche dopo la chiusura di tutti i programmi dall&apos;area virtuale</translatorcomment>
        <translation>Mantieni lo stato terminato dei processi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="571"/>
        <source>&amp;Options</source>
        <translation>&amp;Opzioni</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="572"/>
        <location filename="SandMan.cpp" line="689"/>
        <source>Global Settings</source>
        <translation>Impostazioni globali</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="573"/>
        <location filename="SandMan.cpp" line="699"/>
        <source>Reset all hidden messages</source>
        <translation>Ripristina tutti i messaggi nascosti</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="564"/>
        <source>Trace Logging</source>
        <translation>Attiva log di accesso</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="431"/>
        <source>Vintage View (like SbieCtrl)</source>
        <translation>Interfaccia classica (in stile SbieCtrl)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="441"/>
        <source>&amp;Help</source>
        <translation>&amp;Aiuto</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="450"/>
        <source>Visit Support Forum</source>
        <translation>Visita il forum di supporto</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="449"/>
        <source>Online Documentation</source>
        <translation>Documentazione online</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="448"/>
        <source>Contribute to Sandboxie-Plus</source>
        <translation>Come contribuire al progetto</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="452"/>
        <source>Check for Updates</source>
        <translation>Controlla aggiornamenti</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="454"/>
        <source>About the Qt Framework</source>
        <translation>Informazioni su Qt (framework)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="455"/>
        <location filename="SandMan.cpp" line="3339"/>
        <source>About Sandboxie-Plus</source>
        <translation>Informazioni su Sandboxie Plus</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="465"/>
        <source>Import Box</source>
        <translation>Importa area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="467"/>
        <location filename="SandMan.cpp" line="601"/>
        <source>Run Sandboxed</source>
        <translation>Avvia nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="485"/>
        <location filename="SandMan.cpp" line="612"/>
        <source>Is Window Sandboxed?</source>
        <translatorcomment>Come da traduzione italiana di Sandboxie Classic</translatorcomment>
        <translation>Strumento di controllo finestre</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="530"/>
        <source>Show File Panel</source>
        <translation>Mostra pannello dei file</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="579"/>
        <location filename="SandMan.cpp" line="707"/>
        <source>Edit Sandboxie.ini</source>
        <translation>Modifica Sandboxie.ini</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="582"/>
        <source>Edit Templates.ini</source>
        <translation>Modifica Templates.ini</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="584"/>
        <source>Edit Sandboxie-Plus.ini</source>
        <translation>Modifica Sandboxie-Plus.ini</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="588"/>
        <location filename="SandMan.cpp" line="710"/>
        <source>Reload configuration</source>
        <translation>Ricarica configurazione</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="600"/>
        <source>&amp;File</source>
        <translation>&amp;File</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="613"/>
        <source>Resource Access Monitor</source>
        <translation>Monitor accesso risorse</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="646"/>
        <source>Programs</source>
        <translation>Programmi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="647"/>
        <source>Files and Folders</source>
        <translation>File e cartelle</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="673"/>
        <source>Create New Sandbox</source>
        <translation>Crea nuova area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="674"/>
        <source>Create New Group</source>
        <translation>Crea nuovo gruppo</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="675"/>
        <source>Import Sandbox</source>
        <translation>Importa area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="677"/>
        <source>Set Container Folder</source>
        <translation>Modifica percorso delle aree virtuali</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="680"/>
        <source>Set Layout and Groups</source>
        <translation>Imposta ordine e gruppi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="682"/>
        <source>Reveal Hidden Boxes</source>
        <translation>Mostra aree virtuali nascoste</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="688"/>
        <source>&amp;Configure</source>
        <translation>&amp;Impostazioni</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="692"/>
        <source>Program Alerts</source>
        <translation>Avvisi dei programmi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="694"/>
        <source>Windows Shell Integration</source>
        <translation>Integrazione in Windows</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="696"/>
        <source>Software Compatibility</source>
        <translation>Compatibilità con i programmi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="705"/>
        <source>Lock Configuration</source>
        <translation>Blocca configurazione</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="724"/>
        <source>Sandbox %1</source>
        <translation>Area virtuale %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="746"/>
        <location filename="SandMan.cpp" line="747"/>
        <source>Cleanup</source>
        <translation>Pulizia</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="833"/>
        <source>Click to open web browser</source>
        <translation>Clicca per aprire il browser Web</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1011"/>
        <source>Time|Box Name|File Path</source>
        <translation>Ora|Area virtuale|Percorso file</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="568"/>
        <location filename="SandMan.cpp" line="651"/>
        <location filename="SandMan.cpp" line="1019"/>
        <source>Recovery Log</source>
        <translation>Log di recupero</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1063"/>
        <source>Do you want to close Sandboxie Manager?</source>
        <translation>Vuoi chiudere Sandboxie Manager?</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1083"/>
        <source>Sandboxie-Plus was running in portable mode, now it has to clean up the created services. This will prompt for administrative privileges.

Do you want to do the clean up?</source>
        <translation>Sandboxie Plus è stato avviato in modalità portatile, quindi ora deve cancellare i servizi creati. Questa operazione richiederà privilegi amministrativi.

Effettuare la pulizia?</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1084"/>
        <location filename="SandMan.cpp" line="1483"/>
        <location filename="SandMan.cpp" line="1814"/>
        <location filename="SandMan.cpp" line="2418"/>
        <location filename="SandMan.cpp" line="2846"/>
        <location filename="SandMan.cpp" line="2862"/>
        <source>Don&apos;t show this message again.</source>
        <translation>Non mostrare più questo messaggio.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1342"/>
        <source>Unknown operation &apos;%1&apos; requested via command line</source>
        <translation>Operazione sconosciuta &apos;%1&apos; richiesta tramite riga di comando</translation>
    </message>
    <message>
        <location filename="SandManTray.cpp" line="178"/>
        <source> - Driver/Service NOT Running!</source>
        <translation> - Driver/Servizio NON in esecuzione!</translation>
    </message>
    <message>
        <location filename="SandManTray.cpp" line="180"/>
        <source> - Deleting Sandbox Content</source>
        <translation> - Eliminazione del contenuto dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1571"/>
        <source>Auto Deleting %1 Content</source>
        <translation>Eliminazione automatica del contenuto %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1792"/>
        <source>Current Config: %1</source>
        <translation>Configurazione corrente: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2550"/>
        <location filename="SandMan.cpp" line="2552"/>
        <location filename="SandMan.cpp" line="3078"/>
        <source>Sandboxie-Plus - Error</source>
        <translation>Sandboxie Plus - Errore</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2550"/>
        <source>Failed to stop all Sandboxie components</source>
        <translation>Impossibile fermare tutti i componenti di Sandboxie</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2552"/>
        <source>Failed to start required Sandboxie components</source>
        <translation>Impossibile avviare i componenti di Sandboxie richiesti</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="470"/>
        <location filename="SandMan.cpp" line="603"/>
        <location filename="SandManTray.cpp" line="101"/>
        <source>Pause Forcing Programs</source>
        <translation>Sospendi programmi forzati</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="816"/>
        <source>Click to run installer</source>
        <translation>Clicca per avviare l&apos;installer</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="820"/>
        <source>Click to apply update</source>
        <translation>Clicca per applicare l&apos;aggiornamento</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="823"/>
        <source>&lt;a href=&quot;sbie://update/check&quot; style=&quot;color: red;&quot;&gt;There is a new Sandboxie-Plus update v%1 available&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;sbie://update/check&quot; style=&quot;color: red;&quot;&gt;Un nuovo aggiornamento di Sandboxie Plus v%1 è disponibile&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1791"/>
        <source>Sandboxie-Plus Version: %1 (%2)</source>
        <translation>Versione di Sandboxie Plus: %1 (%2)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1856"/>
        <source> for Personal use</source>
        <translation> per uso personale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1858"/>
        <source>   -   for Non-Commercial use ONLY</source>
        <translation>   -   SOLO per uso non commerciale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1887"/>
        <source>Default sandbox not found; creating: %1</source>
        <translation>Area virtuale predefinita non trovata; in fase di creazione: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2088"/>
        <source>The program %1 started in box %2 will be terminated in 5 minutes because the box was configured to use features exclusively available to project supporters.</source>
        <translation>Il programma %1 avviato nell&apos;area virtuale %2 verrà terminato tra 5 minuti poichè l&apos;area virtuale utilizza funzioni disponibili esclusivamente ai sostenitori del progetto.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2090"/>
        <source>The box %1 is configured to use features exclusively available to project supporters, these presets will be ignored.</source>
        <translation>L&apos;area virtuale %1 utilizza funzioni disponibili esclusivamente ai sostenitori del progetto, pertanto le seguenti impostazioni verranno ignorate.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2091"/>
        <source>&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;Become a project supporter&lt;/a&gt;, and receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;</source>
        <translation>&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;Diventa un sostenitore di Sandboxie Plus&lt;/a&gt; per ricevere un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;certificato di supporto&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2218"/>
        <source>The evaluation period has expired!!!</source>
        <translation>Il periodo di valutazione è scaduto!</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2378"/>
        <source>Please enter the duration, in seconds, for disabling Forced Programs rules.</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo per ragioni di lunghezza</translatorcomment>
        <translation>Immettere l&apos;intervallo in secondi per la disattivazione&lt;br /&gt;delle regole dei programmi ad avvio forzato.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3013"/>
        <source>Error Status: 0x%1 (%2)</source>
        <translation>Stato di errore: 0x%1 (%2)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3014"/>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3037"/>
        <source>Failed to copy box data files</source>
        <translation>Impossibile copiare i dati dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3042"/>
        <source>Failed to remove old box data files</source>
        <translation>Impossibile rimuovere i dati obsoleti dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3056"/>
        <source>Unknown Error Status: 0x%1</source>
        <translation>Stato di errore sconosciuto: 0x%1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3312"/>
        <source>&lt;h3&gt;About Sandboxie-Plus&lt;/h3&gt;&lt;p&gt;Version %1&lt;/p&gt;&lt;p&gt;Copyright (c) 2020-2023 by DavidXanatos&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Informazioni su Sandboxie Plus&lt;/h3&gt;&lt;p&gt;Versione %1&lt;/p&gt;&lt;p&gt;Copyright (c) 2020-2023 by DavidXanatos&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="164"/>
        <source>WARNING: Sandboxie-Plus.ini in %1 cannot be written to, settings will not be saved.</source>
        <translation>ATTENZIONE: Errore di scrittura sul file Sandboxie-Plus.ini in %1, le impostazioni non verranno salvate.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="574"/>
        <location filename="SandMan.cpp" line="700"/>
        <source>Reset all GUI options</source>
        <translation>Ripristina layout delle finestre</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="824"/>
        <source>Click to download update</source>
        <translation>Clicca per scaricare l&apos;aggiornamento</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="832"/>
        <source>&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Support Sandboxie-Plus on Patreon&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Sostieni Sandboxie Plus su Patreon&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1253"/>
        <source>This box provides &lt;a href=&quot;sbie://docs/security-mode&quot;&gt;enhanced security isolation&lt;/a&gt;, it is suitable to test untrusted software.</source>
        <oldsource>This box provides enhanced security isolation, it is suitable to test untrusted software.</oldsource>
        <translation type="unfinished">Quest&apos;area virtuale fornisce un isolamento avanzato, ed è indicata per testare software non attendibile.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1257"/>
        <source>This box provides standard isolation, it is suitable to run your software to enhance security.</source>
        <translation>Quest&apos;area virtuale fornisce un isolamento standard, ed è indicata ad eseguire software in sicurezza.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1261"/>
        <source>This box does not enforce isolation, it is intended to be used as an &lt;a href=&quot;sbie://docs/compartment-mode&quot;&gt;application compartment&lt;/a&gt; for software virtualization only.</source>
        <oldsource>This box does not enforce isolation, it is intended to be used as an application compartment for software virtualization only.</oldsource>
        <translation type="unfinished">Quest&apos;area virtuale non applica l&apos;isolamento, ed è indicata per una migliore compatibilità.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1266"/>
        <source>

This box &lt;a href=&quot;sbie://docs/privacy-mode&quot;&gt;prevents access to all user data&lt;/a&gt; locations, except explicitly granted in the Resource Access options.</source>
        <oldsource>

This box prevents access to all user data locations, except explicitly granted in the Resource Access options.</oldsource>
        <translation type="unfinished">

Quest&apos;area virtuale impedisce l&apos;accesso a tutti i percorsi dei dati utente, tranne quelli esplicitamente consentiti nelle opzioni di Accesso risorse.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1428"/>
        <source>No Force Process</source>
        <translation>Sospensione processi forzati in corso</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1481"/>
        <source>Some compatibility templates (%1) are missing, probably deleted, do you want to remove them from all boxes?</source>
        <translation>Alcuni modelli di compatibilità (%1) sono mancanti, probabilmente cancellati, vuoi rimuoverli da tutte le aree virtuali?</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1498"/>
        <source>Cleaned up removed templates...</source>
        <translation>Pulizia dei modelli rimossi...</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1550"/>
        <source>Executing OnBoxDelete: %1</source>
        <translation>Esecuzione di OnBoxDelete: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1643"/>
        <source>Removed Shortcut: %1</source>
        <translation>Collegamento rimosso: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1722"/>
        <source>Updated Shortcut to: %1</source>
        <translation>Collegamento aggiornato in: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1724"/>
        <source>Added Shortcut to: %1</source>
        <translation>Collegamento aggiunto in: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1756"/>
        <source>Auto deleting content of %1</source>
        <translation>Eliminazione automatica del contenuto di %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1775"/>
        <source>Auto removing sandbox %1</source>
        <translation>Autoeliminazione area virtuale %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1790"/>
        <source>%1 Directory: %2</source>
        <translatorcomment>La posizione di %1 è intenzionale.</translatorcomment>
        <translation>Directory %1: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1790"/>
        <source>Application</source>
        <translatorcomment>L&apos;iniziale minuscola è intenzionale</translatorcomment>
        <translation>applicazione</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1790"/>
        <source>Installation</source>
        <translatorcomment>L&apos;iniziale minuscola è intenzionale</translatorcomment>
        <translation>di installazione</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1793"/>
        <source>Data Directory: %1</source>
        <translation>Directory dei dati: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1811"/>
        <source>Sandboxie-Plus was started in portable mode, do you want to put the Sandbox folder into its parent directory?
Yes will choose: %1
No will choose: %2</source>
        <translation>Sandboxie Plus è stato avviato in modalità portatile, vuoi posizionare la cartella Sandbox nella directory principale?
Scegliere Sì per selezionare: %1
Scegliere No per selezionare: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="1927"/>
        <source>   -   NOT connected</source>
        <translation>   -   NON connesso</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2119"/>
        <source>PID %1: </source>
        <translation>PID %1: </translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2121"/>
        <source>%1 (%2): </source>
        <translation>%1 (%2): </translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2150"/>
        <source>The selected feature set is only available to project supporters. Processes started in a box with this feature set enabled without a supporter certificate will be terminated after 5 minutes.&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;Become a project supporter&lt;/a&gt;, and receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo per ragioni di lunghezza</translatorcomment>
        <translation>La funzionalità selezionata è disponibile solo ai sostenitori del progetto.&lt;br /&gt;I processi avviati nell&apos;area virtuale con questa funzione senza un valido certificato di supporto verranno terminati dopo 5 minuti.&lt;br /&gt;&lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;Diventa un sostenitore di Sandboxie Plus&lt;/a&gt;, e ricevi un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;certificato di supporto&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="202"/>
        <source>Recovering file %1 to %2</source>
        <translation>Recupero file %1 in %2</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="214"/>
        <source>The file %1 already exists, do you want to overwrite it?</source>
        <translation>Il file %1 esiste già, vuoi sovrascriverlo?</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="179"/>
        <location filename="SandManRecovery.cpp" line="215"/>
        <source>Do this for all files!</source>
        <translation>Applica a tutti i file!</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="99"/>
        <location filename="SandManRecovery.cpp" line="159"/>
        <source>Checking file %1</source>
        <translation>Controllo file %1</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="107"/>
        <source>The file %1 failed a security check!

%2</source>
        <translation>Il file %1 non ha superato un controllo di sicurezza!

%2</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="115"/>
        <source>All files passed the checks</source>
        <translation>Tutti i file hanno superato i controlli</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="178"/>
        <source>The file %1 failed a security check, do you want to recover it anyway?

%2</source>
        <translation>Il file %1 non ha superato un controllo di sicurezza, si desidera comunque recuperarlo?

%2</translation>
    </message>
    <message>
        <location filename="SandManRecovery.cpp" line="243"/>
        <source>Failed to recover some files: 
</source>
        <translation>Impossibile recuperare alcuni file: 
</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2275"/>
        <source>Only Administrators can change the config.</source>
        <translation>Solo gli amministratori possono cambiare la configurazione.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2285"/>
        <source>Please enter the configuration password.</source>
        <translation>Immettere la password di configurazione.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2293"/>
        <source>Login Failed: %1</source>
        <translation>Login non riuscito: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2313"/>
        <source>Select file name</source>
        <translation>Seleziona nome del file</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2313"/>
        <source>7-zip Archive (*.7z)</source>
        <translation>Archivio 7-zip (*.7z)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2326"/>
        <source>This name is already in use, please select an alternative box name</source>
        <translation>Questo nome è già in uso, si prega di selezionare un nome alternativo per l&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2340"/>
        <source>Importing: %1</source>
        <translation>Importazione: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2358"/>
        <source>Do you want to terminate all processes in all sandboxes?</source>
        <translation>Chiudere tutti i processi in tutte le aree virtuali?</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2359"/>
        <source>Terminate all without asking</source>
        <translation>Terminali tutti senza chiedere</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2393"/>
        <source>No Recovery</source>
        <translation>Sospensione recupero file in corso</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2399"/>
        <source>No Messages</source>
        <translation>Sospensione messaggi popup in corso</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2417"/>
        <source>Sandboxie-Plus was started in portable mode and it needs to create necessary services. This will prompt for administrative privileges.</source>
        <translation>Sandboxie Plus è stato avviato in modalità portatile e deve creare i servizi necessari. Questa operazione richiederà privilegi amministrativi.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2446"/>
        <source>CAUTION: Another agent (probably SbieCtrl.exe) is already managing this Sandboxie session, please close it first and reconnect to take over.</source>
        <translation>ATTENZIONE: Un altro processo (probabilmente SbieCtrl.exe) sta attualmente gestendo questa sessione Sandboxie, si prega di chiuderla e di riconnettersi.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2554"/>
        <source>Maintenance operation failed (%1)</source>
        <translation>Operazione di manutenzione non riuscita (%1)</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2559"/>
        <source>Maintenance operation completed</source>
        <translation>Operazione di manutenzione completata</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2579"/>
        <source>Executing maintenance operation, please wait...</source>
        <translation>Operazione di manutenzione in esecuzione, attendere...</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2690"/>
        <source>In the Plus UI, this functionality has been integrated into the main sandbox list view.</source>
        <translation>Nell&apos;interfaccia utente Plus, questa funzionalità è stata integrata nell&apos;elenco principale delle aree virtuali.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2691"/>
        <source>Using the box/group context menu, you can move boxes and groups to other groups. You can also use drag and drop to move the items around. Alternatively, you can also use the arrow keys while holding ALT down to move items up and down within their group.&lt;br /&gt;You can create new boxes and groups from the Sandbox menu.</source>
        <translation>Utilizzando il menu contestuale dell&apos;area virtuale/gruppo, è possibile spostare aree virtuali e gruppi in altri gruppi. È inoltre prevista la possibilità di utilizzare il trascinamento per spostare gli elementi. In alternativa, è possibile utilizzare i tasti freccia tenendo premuto ALT per spostare gli elementi in alto e in basso all&apos;interno del gruppo.&lt;br /&gt;È possibile creare nuove aree virtuali e gruppi dal menu Area virtuale.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2759"/>
        <source>Do you also want to reset hidden message boxes (yes), or only all log messages (no)?</source>
        <translation>Vuoi reimpostare i messaggi nascosti (sì), o soltanto i log dei messaggi (no)?</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2844"/>
        <source>You are about to edit the Templates.ini, this is generally not recommended.
This file is part of Sandboxie and all change done to it will be reverted next time Sandboxie is updated.</source>
        <translation>Si sta per modificare il file Templates.ini, operazione generalmente sconsigliata.
Questo file fa parte di Sandboxie e tutte le modifiche apportate ad esso saranno annullate al prossimo aggiornamento di Sandboxie.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2860"/>
        <source>The changes will be applied automatically whenever the file gets saved.</source>
        <translation>Le modifiche verranno applicate automaticamente ogni volta che il file viene salvato.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2861"/>
        <source>The changes will be applied automatically as soon as the editor is closed.</source>
        <translation>Le modifiche verranno applicate automaticamente non appena l&apos;editor viene chiuso.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2906"/>
        <source>Sandboxie config has been reloaded</source>
        <translation>La configurazione di Sandboxie è stata aggiornata</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3016"/>
        <source>Administrator rights are required for this operation.</source>
        <translation>Questa operazione richiede privilegi amministrativi.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3017"/>
        <source>Failed to execute: %1</source>
        <translation>Impossibile eseguire: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3018"/>
        <source>Failed to connect to the driver</source>
        <translation>Impossibile collegarsi al driver</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3019"/>
        <source>Failed to communicate with Sandboxie Service: %1</source>
        <translation>Impossibile comunicare con Sandboxie Service: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3020"/>
        <source>An incompatible Sandboxie %1 was found. Compatible versions: %2</source>
        <translation>La versione di Sandboxie %1 risulta incompatibile. Versioni compatibili: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3021"/>
        <source>Can&apos;t find Sandboxie installation path.</source>
        <translation>Impossibile trovare il percorso di installazione di Sandboxie.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3022"/>
        <source>Failed to copy configuration from sandbox %1: %2</source>
        <translation>Impossibile copiare la configurazione dall&apos;area virtuale %1: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3023"/>
        <source>A sandbox of the name %1 already exists</source>
        <translation>Un&apos;area virtuale %1 è già presente</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3024"/>
        <source>Failed to delete sandbox %1: %2</source>
        <translation>Impossibile cancellare area virtuale %1: %2</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3025"/>
        <source>The sandbox name can not be longer than 32 characters.</source>
        <translation>Il nome dell&apos;area virtuale non può superare i 32 caratteri.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3026"/>
        <source>The sandbox name can not be a device name.</source>
        <translation>Il nome dell&apos;area virtuale non può essere quello di un dispositivo.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3027"/>
        <source>The sandbox name can contain only letters, digits and underscores which are displayed as spaces.</source>
        <translation>Il nome dell&apos;area virtuale  può contenere solo lettere, cifre e trattini bassi che vengono visualizzati come spazi.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3028"/>
        <source>Failed to terminate all processes</source>
        <translation>Impossibile terminare tutti i processi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3029"/>
        <source>Delete protection is enabled for the sandbox</source>
        <translation>Blocco di eliminazione attivo per quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3030"/>
        <source>All sandbox processes must be stopped before the box content can be deleted</source>
        <translation>Tutti i processi dell&apos;area virtuale devono essere interrotti prima che il contenuto possa essere eliminato</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3031"/>
        <source>Error deleting sandbox folder: %1</source>
        <translation>Errore durante l&apos;eliminazione della cartella: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3033"/>
        <source>A sandbox must be emptied before it can be deleted.</source>
        <translation>Occorre svuotare il contenuto dell&apos;area virtuale prima di poterla rimuovere.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3034"/>
        <source>Failed to move directory &apos;%1&apos; to &apos;%2&apos;</source>
        <translation>Impossibile spostare directory &apos;%1&apos; in &apos;%2&apos;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3035"/>
        <source>This Snapshot operation can not be performed while processes are still running in the box.</source>
        <translation>Questa istantanea non può essere eseguita mentre i processi sono ancora in esecuzione nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3036"/>
        <source>Failed to create directory for new snapshot</source>
        <translation>Impossibile creare directory su nuova istantanea</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3038"/>
        <source>Snapshot not found</source>
        <translation>Istantanea non trovata</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3039"/>
        <source>Error merging snapshot directories &apos;%1&apos; with &apos;%2&apos;, the snapshot has not been fully merged.</source>
        <translation>Errore durante l&apos;unione delle directory &apos;%1&apos; con &apos;%2&apos;: unione delle istantanee non riuscita.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3040"/>
        <source>Failed to remove old snapshot directory &apos;%1&apos;</source>
        <translation>Impossibile rimuovere directory di istantanea &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3041"/>
        <source>Can&apos;t remove a snapshot that is shared by multiple later snapshots</source>
        <translation>Impossibile rimuovere un&apos;istantanea condivisa da istantanee successive</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3043"/>
        <source>You are not authorized to update configuration in section &apos;%1&apos;</source>
        <translation>Non sei autorizzato ad aggiornare la configurazione nel punto &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3044"/>
        <source>Failed to set configuration setting %1 in section %2: %3</source>
        <translation>Salvataggio dell&apos;impostazione di configurazione %1 fallito nel punto %2: %3</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3045"/>
        <source>Can not create snapshot of an empty sandbox</source>
        <translation>Impossibile creare istantanea di un&apos;area virtuale vuota</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3046"/>
        <source>A sandbox with that name already exists</source>
        <translation>Un&apos;area virtuale con quel nome è già presente</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3047"/>
        <source>The config password must not be longer than 64 characters</source>
        <translation>La password non può superare i 64 caratteri</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3048"/>
        <source>The operation was canceled by the user</source>
        <translation>Operazione annullata dall&apos;utente</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3050"/>
        <source>Import/Export not available, 7z.dll could not be loaded</source>
        <translation>Importazione/esportazione non disponibile, 7z.dll non può essere caricato</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3051"/>
        <source>Failed to create the box archive</source>
        <translation>Impossibile creare l&apos;archivio dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3052"/>
        <source>Failed to open the 7z archive</source>
        <translation>Impossibile aprire l&apos;archivio 7z</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3053"/>
        <source>Failed to unpack the box archive</source>
        <translation>Impossibile estrarre l&apos;archivio dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3054"/>
        <source>The selected 7z file is NOT a box archive</source>
        <translation>Il file 7z selezionato NON è un archivio relativo a un&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3080"/>
        <source>Operation failed for %1 item(s).</source>
        <translation>Operazione fallita per %1 elemento(i).</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3111"/>
        <source>Do you want to open %1 in a sandboxed (yes) or unsandboxed (no) Web browser?</source>
        <translation>Aprire %1 nel browser dell&apos;area virtuale (sì) o all&apos;esterno (no)?</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3112"/>
        <source>Remember choice for later.</source>
        <translation>Ricorda la scelta per dopo.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3258"/>
        <source>Case Sensitive</source>
        <translation>&amp;Maiuscole/minuscole</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3259"/>
        <source>RegExp</source>
        <translation>Espressione regolare</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3260"/>
        <source>Highlight</source>
        <translation>Evidenzia</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3261"/>
        <source>Close</source>
        <translation>Chiudi</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3262"/>
        <source>&amp;Find ...</source>
        <translation>&amp;Trova ...</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3263"/>
        <source>All columns</source>
        <translation>Tutte le colonne</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3320"/>
        <source>This copy of Sandboxie+ is certified for: %1</source>
        <translation>Questa copia di Sandboxie+ è certificata per: %1</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3322"/>
        <source>Sandboxie+ is free for personal and non-commercial use.</source>
        <translation>Sandboxie+ è gratuito per uso personale e non commerciale.</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3325"/>
        <source>Sandboxie-Plus is an open source continuation of Sandboxie.&lt;br /&gt;Visit &lt;a href=&quot;https://sandboxie-plus.com&quot;&gt;sandboxie-plus.com&lt;/a&gt; for more information.&lt;br /&gt;&lt;br /&gt;%3&lt;br /&gt;&lt;br /&gt;Driver version: %1&lt;br /&gt;Features: %2&lt;br /&gt;&lt;br /&gt;Icons from &lt;a href=&quot;https://icons8.com&quot;&gt;icons8.com&lt;/a&gt;</source>
        <translation>Sandboxie Plus è la continuazione open source di Sandboxie.&lt;br /&gt;Visita &lt;a href=&quot;https://sandboxie-plus.com&quot;&gt;sandboxie-plus.com&lt;/a&gt; per informazioni.&lt;br /&gt;&lt;br /&gt;%3&lt;br /&gt;&lt;br /&gt;Versione driver: %1&lt;br /&gt;Funzioni attive: %2&lt;br /&gt;&lt;br /&gt;Icone by &lt;a href=&quot;https://icons8.com&quot;&gt;icons8.com&lt;/a&gt;&lt;br /&gt;&lt;br /&gt;Traduzione italiana a cura di &lt;a href=&quot;https://www.eng2ita.net&quot;&gt;eng2ita.net&lt;/a&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2224"/>
        <source>The supporter certificate is not valid for this build, please get an updated certificate</source>
        <translation>Il certificato non è valido per questa build, si prega di ottenere un certificato aggiornato</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2227"/>
        <source>The supporter certificate has expired%1, please get an updated certificate</source>
        <translation>Il certificato è scaduto%1, si prega di ottenere un certificato aggiornato</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2228"/>
        <source>, but it remains valid for the current build</source>
        <translation>, ma resta valido per la build corrente</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="2230"/>
        <source>The supporter certificate will expire in %1 days, please get an updated certificate</source>
        <translation>Il certificato scadrà fra %1 giorni, si prega di ottenere un certificato aggiornato</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="88"/>
        <source>The selected window is running as part of program %1 in sandbox %2</source>
        <translation>La finestra selezionata appartiene al programma %1 avviato nell&apos;area virtuale %2</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="95"/>
        <source>The selected window is not running as part of any sandboxed program.</source>
        <translation>La finestra selezionata non appartiene ad alcun programma avviato nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="134"/>
        <source>Drag the Finder Tool over a window to select it, then release the mouse to check if the window is sandboxed.</source>
        <translation>Trascina lo strumento di ricerca su una finestra per selezionarla, quindi rilascia il mouse per controllare se la finestra è in esecuzione in un&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="SbieFindWnd.cpp" line="204"/>
        <source>Sandboxie-Plus - Window Finder</source>
        <translation>Sandboxie Plus - Controllo finestre</translation>
    </message>
    <message>
        <location filename="main.cpp" line="123"/>
        <source>Sandboxie Manager can not be run sandboxed!</source>
        <translation>Sandboxie Manager non può essere avviato nell&apos;area virtuale!</translation>
    </message>
</context>
<context>
    <name>CSbieModel</name>
    <message>
        <location filename="Models/SbieModel.cpp" line="159"/>
        <source>Box Group</source>
        <translation>Gruppo area virtuale</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="315"/>
        <source>Empty</source>
        <translation>Vuota</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="559"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="560"/>
        <source>Process ID</source>
        <translation>ID processo</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="561"/>
        <source>Status</source>
        <translation>Stato</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="562"/>
        <source>Title</source>
        <translation>Titolo</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="563"/>
        <source>Info</source>
        <translation>Informazioni</translation>
    </message>
    <message>
        <location filename="Models/SbieModel.cpp" line="567"/>
        <source>Path / Command Line</source>
        <translation>Percorso / Riga di comando</translation>
    </message>
</context>
<context>
    <name>CSbieProcess</name>
    <message>
        <location filename="SbieProcess.cpp" line="59"/>
        <source>Sbie RpcSs</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="60"/>
        <source>Sbie DcomLaunch</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="61"/>
        <source>Sbie Crypto</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="62"/>
        <source>Sbie WuauServ</source>
        <translation>Sbie WuauServ</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="63"/>
        <source>Sbie BITS</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="64"/>
        <source>Sbie Svc</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="65"/>
        <source>MSI Installer</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="66"/>
        <source>Trusted Installer</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="67"/>
        <source>Windows Update</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="68"/>
        <source>Windows Explorer</source>
        <translation>Esplora risorse</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="69"/>
        <source>Internet Explorer</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="70"/>
        <source>Firefox</source>
        <translation>Mozilla Firefox</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="71"/>
        <source>Windows Media Player</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="72"/>
        <source>Winamp</source>
        <translation>Winamp</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="73"/>
        <source>KMPlayer</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="74"/>
        <source>Windows Live Mail</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="75"/>
        <source>Service Model Reg</source>
        <translation>Strumento di registrazione ServiceModel</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="76"/>
        <source>RunDll32</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="77"/>
        <location filename="SbieProcess.cpp" line="78"/>
        <source>DllHost</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="79"/>
        <source>Windows Ink Services</source>
        <translation>Servizi di input penna</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="80"/>
        <source>Chromium Based</source>
        <translation>Chromium-based</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="81"/>
        <source>Google Updater</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="82"/>
        <source>Acrobat Reader</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="83"/>
        <source>MS Outlook</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="84"/>
        <source>MS Excel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="85"/>
        <source>Flash Player</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="86"/>
        <source>Firefox Plugin Container</source>
        <translation></translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="87"/>
        <source>Generic Web Browser</source>
        <translation>Browser Web generico</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="88"/>
        <source>Generic Mail Client</source>
        <translation>Client di posta generico</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="89"/>
        <source>Thunderbird</source>
        <translation>Thunderbird</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="99"/>
        <source>Terminated</source>
        <translation>Terminato</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="105"/>
        <source>Forced </source>
        <translation>Forzato </translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="103"/>
        <source>Running</source>
        <translation>In esecuzione</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="109"/>
        <source> Elevated</source>
        <translation> Elevato</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="111"/>
        <source> as System</source>
        <translation> come SYSTEM</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="114"/>
        <source> in session %1</source>
        <translation> nella sessione %1</translation>
    </message>
    <message>
        <location filename="SbieProcess.cpp" line="120"/>
        <source> (%1)</source>
        <translation> (%1)</translation>
    </message>
</context>
<context>
    <name>CSbieView</name>
    <message>
        <location filename="Views/SbieView.cpp" line="149"/>
        <location filename="Views/SbieView.cpp" line="273"/>
        <source>Create New Box</source>
        <translation>Crea nuova area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="382"/>
        <source>Remove Group</source>
        <translation>Rimuovi gruppo</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="157"/>
        <source>Run</source>
        <translation>Avvia</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="158"/>
        <source>Run Program</source>
        <translation>Avvia programma</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="159"/>
        <source>Run from Start Menu</source>
        <translation>Avvia dal menu Start</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="170"/>
        <source>Default Web Browser</source>
        <translation>Browser Web predefinito</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="171"/>
        <source>Default eMail Client</source>
        <translation>Programma di posta predefinito</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="173"/>
        <source>Windows Explorer</source>
        <translation>Esplora risorse</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="174"/>
        <source>Registry Editor</source>
        <translation>Editor del Registro di sistema</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="175"/>
        <source>Programs and Features</source>
        <translation>Programmi e funzionalità</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="186"/>
        <source>Terminate All Programs</source>
        <translation>Chiudi tutti i programmi</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="192"/>
        <location filename="Views/SbieView.cpp" line="251"/>
        <location filename="Views/SbieView.cpp" line="325"/>
        <location filename="Views/SbieView.cpp" line="364"/>
        <source>Create Shortcut</source>
        <translation>Crea collegamento</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="194"/>
        <location filename="Views/SbieView.cpp" line="310"/>
        <source>Explore Content</source>
        <translation>Esplora contenuto</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="191"/>
        <location filename="Views/SbieView.cpp" line="324"/>
        <source>Refresh Info</source>
        <translation>Aggiorna informazioni</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="196"/>
        <location filename="Views/SbieView.cpp" line="317"/>
        <source>Snapshots Manager</source>
        <translation>Gestore istantanee</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="197"/>
        <source>Recover Files</source>
        <translation>Recupero file</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="198"/>
        <location filename="Views/SbieView.cpp" line="309"/>
        <source>Delete Content</source>
        <translation>Elimina contenuto</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="205"/>
        <source>Sandbox Presets</source>
        <translation>Opzioni rapide</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="207"/>
        <source>Ask for UAC Elevation</source>
        <translation>Richiedi elevazione UAC</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="208"/>
        <source>Drop Admin Rights</source>
        <translation>Limita privilegi amministrativi</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="209"/>
        <source>Emulate Admin Rights</source>
        <translation>Emula privilegi amministrativi</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="217"/>
        <source>Block Internet Access</source>
        <translation>Blocca accesso a internet</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="219"/>
        <source>Allow Network Shares</source>
        <translation>Consenti condivisione di rete</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="200"/>
        <source>Sandbox Options</source>
        <translation>Opzioni area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="162"/>
        <location filename="Views/SbieView.cpp" line="288"/>
        <source>(Host) Start Menu</source>
        <translation>Menu Start (Host)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="189"/>
        <source>Browse Files</source>
        <translation>Esplora file</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="223"/>
        <source>Immediate Recovery</source>
        <translation>Recupero immediato</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="225"/>
        <source>Disable Force Rules</source>
        <translation>Disattiva regole di forzatura</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="228"/>
        <location filename="Views/SbieView.cpp" line="315"/>
        <source>Sandbox Tools</source>
        <translation>Strumenti area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="229"/>
        <source>Duplicate Box Config</source>
        <translation>Duplica configurazione area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="230"/>
        <source>Export Box</source>
        <translation>Esporta area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="232"/>
        <location filename="Views/SbieView.cpp" line="328"/>
        <source>Rename Sandbox</source>
        <translation>Rinomina area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="233"/>
        <location filename="Views/SbieView.cpp" line="329"/>
        <source>Move Sandbox</source>
        <translation>Sposta area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="244"/>
        <location filename="Views/SbieView.cpp" line="340"/>
        <source>Remove Sandbox</source>
        <translation>Elimina area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="249"/>
        <location filename="Views/SbieView.cpp" line="362"/>
        <source>Terminate</source>
        <translation>Termina</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="252"/>
        <source>Preset</source>
        <translation>Impostazioni</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="253"/>
        <source>Pin to Run Menu</source>
        <translation>Aggiungi al menu Avvia</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="255"/>
        <source>Block and Terminate</source>
        <translation>Blocca e termina</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="259"/>
        <source>Allow internet access</source>
        <translation>Consenti accesso a internet</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="261"/>
        <source>Force into this sandbox</source>
        <translation>Forza avvio su quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="263"/>
        <source>Set Linger Process</source>
        <translation>Imposta come processo secondario</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="265"/>
        <source>Set Leader Process</source>
        <translation>Imposta come processo principale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="281"/>
        <source>Run Sandboxed</source>
        <translation>Avvia nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="282"/>
        <source>Run Web Browser</source>
        <translation>Avvia il browser Web</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="283"/>
        <source>Run eMail Reader</source>
        <translation>Avvia il programma di posta elettronica</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="284"/>
        <source>Run Any Program</source>
        <translation>Avvia un programma</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="285"/>
        <source>Run From Start Menu</source>
        <translation>Avvia dal menu Start</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="293"/>
        <source>Run Windows Explorer</source>
        <translation>Avvia Esplora risorse</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="307"/>
        <source>Terminate Programs</source>
        <translation>Chiudi tutti i programmi</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="308"/>
        <source>Quick Recover</source>
        <translation>Recupero veloce</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="313"/>
        <source>Sandbox Settings</source>
        <translation>Impostazioni dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="320"/>
        <source>Duplicate Sandbox Config</source>
        <translation>Duplica configurazione area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="321"/>
        <source>Export Sandbox</source>
        <translation>Esporta area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="381"/>
        <source>Move Group</source>
        <translation>Sposta gruppo</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="518"/>
        <source>    File root: %1
</source>
        <translation>    Percorso dei file: %1
</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="519"/>
        <source>    Registry root: %1
</source>
        <translation>    Percorso del registro: %1
</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="520"/>
        <source>    IPC root: %1
</source>
        <translation>    Percorso IPC: %1
</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="522"/>
        <source>Options:
    </source>
        <translation>Opzioni:
    </translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="740"/>
        <source>[None]</source>
        <translation>[Nessuno]</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1011"/>
        <source>Please enter a new group name</source>
        <translation>Immetti un nome per il nuovo gruppo</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="849"/>
        <source>Do you really want to remove the selected group(s)?</source>
        <translation>Eliminare il gruppo o i gruppi selezionati?</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="150"/>
        <location filename="Views/SbieView.cpp" line="274"/>
        <source>Create Box Group</source>
        <translation>Aggiungi gruppo</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="380"/>
        <source>Rename Group</source>
        <translation>Rinomina gruppo</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="154"/>
        <location filename="Views/SbieView.cpp" line="278"/>
        <source>Stop Operations</source>
        <translation>Ferma operazioni</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="178"/>
        <source>Command Prompt</source>
        <translation>Prompt dei comandi</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="179"/>
        <source>Command Prompt (as Admin)</source>
        <translation>Prompt dei comandi (amministratore)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="183"/>
        <source>Command Prompt (32-bit)</source>
        <translation>Prompt dei comandi (32-bit)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="168"/>
        <source>Execute Autorun Entries</source>
        <translatorcomment>https://github.com/sandboxie-plus/Sandboxie/blob/e68e650ecb1c9d0794c524d2b2080c735557fd9e/Sandboxie/apps/start/start.cpp#L1521-L1548</translatorcomment>
        <translation>Esegui voci di Esecuzione Automatica</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="316"/>
        <source>Browse Content</source>
        <translation>Sfoglia contenuto</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="188"/>
        <source>Box Content</source>
        <translation>Contenuto area virtuale</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="169"/>
        <source>Standard Applications</source>
        <translation>Applicazioni standard</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="195"/>
        <source>Open Registry</source>
        <translation>Editor del Registro di sistema</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="234"/>
        <location filename="Views/SbieView.cpp" line="330"/>
        <source>Move Up</source>
        <translation>Sposta in alto</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="239"/>
        <location filename="Views/SbieView.cpp" line="335"/>
        <source>Move Down</source>
        <translation>Sposta in basso</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="839"/>
        <source>Please enter a new name for the Group.</source>
        <translation>Immetti un nuovo nome per il gruppo.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="886"/>
        <source>Move entries by (negative values move up, positive values move down):</source>
        <translation>Ordina le voci per (i valori negativi spostano verso l&apos;alto, quelli positivi verso il basso):</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="934"/>
        <source>A group can not be its own parent.</source>
        <translation>Un gruppo non può essere il proprio genitore.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1039"/>
        <source>The Sandbox name and Box Group name cannot use the &apos;,()&apos; symbol.</source>
        <translation>Il nome dell&apos;area virtuale o del gruppo non può contenere i caratteri &apos;,()&apos;.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1044"/>
        <source>This name is already used for a Box Group.</source>
        <translation>Questo nome è già stato utilizzato per un gruppo.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1049"/>
        <source>This name is already used for a Sandbox.</source>
        <translation>Questo nome è già stato utilizzato per un&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1099"/>
        <location filename="Views/SbieView.cpp" line="1169"/>
        <location filename="Views/SbieView.cpp" line="1409"/>
        <source>Don&apos;t show this message again.</source>
        <translation>Non mostrare più questo messaggio.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1160"/>
        <location filename="Views/SbieView.cpp" line="1180"/>
        <location filename="Views/SbieView.cpp" line="1586"/>
        <source>This Sandbox is empty.</source>
        <translation>L&apos;area virtuale è vuota.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1187"/>
        <source>WARNING: The opened registry editor is not sandboxed, please be careful and only do changes to the pre-selected sandbox locations.</source>
        <translation>ATTENZIONE: L&apos;Editor del Registro di sistema verrà aperto fuori dall&apos;area virtuale, si prega di effettuare modifiche solo nei percorsi delle aree virtuali.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1188"/>
        <source>Don&apos;t show this warning in future</source>
        <translation>Non mostrare questo avviso in futuro</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1244"/>
        <source>Please enter a new name for the duplicated Sandbox.</source>
        <translation>Immetti un nuovo nome per l&apos;area virtuale duplicata.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1244"/>
        <source>%1 Copy</source>
        <translation>%1 Copia</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1283"/>
        <source>Select file name</source>
        <translation>Seleziona nome del file</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1283"/>
        <source>7-zip Archive (*.7z)</source>
        <translation>Archivio 7-zip (*.7z)</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1291"/>
        <source>Exporting: %1</source>
        <translation>Esportazione: %1</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1298"/>
        <source>Please enter a new name for the Sandbox.</source>
        <translation>Immetti un nuovo nome per l&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1319"/>
        <source>Do you really want to remove the selected sandbox(es)?&lt;br /&gt;&lt;br /&gt;Warning: The box content will also be deleted!</source>
        <translation>Eliminare l&apos;area virtuale o le aree virtuali selezionate?&lt;br /&gt;&lt;br /&gt;Attenzione: Il contenuto verrà anch&apos;esso eliminato!</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1350"/>
        <source>This Sandbox is already empty.</source>
        <translation>L&apos;area virtuale è già vuota.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1360"/>
        <source>Do you want to delete the content of the selected sandbox?</source>
        <translation>Eliminare il contenuto dell&apos;area virtuale selezionata?</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1361"/>
        <location filename="Views/SbieView.cpp" line="1365"/>
        <source>Also delete all Snapshots</source>
        <translation>Elimina anche tutte le istantanee</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1364"/>
        <source>Do you really want to delete the content of all selected sandboxes?</source>
        <translation>Eliminare il contenuto delle aree virtuali selezionate?</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1391"/>
        <source>Do you want to terminate all processes in the selected sandbox(es)?</source>
        <translation>Chiudere tutti i processi?</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1392"/>
        <location filename="Views/SbieView.cpp" line="1485"/>
        <source>Terminate without asking</source>
        <translation>Termina senza chiedere</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1407"/>
        <source>The Sandboxie Start Menu will now be displayed. Select an application from the menu, and Sandboxie will create a new shortcut icon on your real desktop, which you can use to invoke the selected application under the supervision of Sandboxie.</source>
        <translation>Ora verrà visualizzato il menu Start di Sandboxie. Selezionare un programma dal menu per creare un collegamento sul desktop reale che consenta l&apos;avvio di tale programma sotto la supervisione di Sandboxie.</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1442"/>
        <location filename="Views/SbieView.cpp" line="1512"/>
        <source>Create Shortcut to sandbox %1</source>
        <translation>Crea collegamento all&apos;area virtuale %1</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1484"/>
        <source>Do you want to terminate %1?</source>
        <translation>Si desidera terminare %1?</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1484"/>
        <source>the selected processes</source>
        <translation>i processi selezionati</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1545"/>
        <source>This box does not have Internet restrictions in place, do you want to enable them?</source>
        <translation>Quest&apos;area virtuale non dispone di restrizioni a Internet, vuoi attivarle?</translation>
    </message>
    <message>
        <location filename="Views/SbieView.cpp" line="1629"/>
        <source>This sandbox is disabled, do you want to enable it?</source>
        <translation>Quest&apos;area virtuale è disattivata, vuoi attivarla?</translation>
    </message>
</context>
<context>
    <name>CSelectBoxWindow</name>
    <message>
        <location filename="Windows/SelectBoxWindow.cpp" line="89"/>
        <source>Sandboxie-Plus - Run Sandboxed</source>
        <translation>Sandboxie Plus - Avvia nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/SelectBoxWindow.cpp" line="206"/>
        <source>Are you sure you want to run the program outside the sandbox?</source>
        <translation>Avviare il programma all&apos;esterno dell&apos;area virtuale?</translation>
    </message>
    <message>
        <location filename="Windows/SelectBoxWindow.cpp" line="219"/>
        <source>Please select a sandbox.</source>
        <translation>Si prega di selezionare un&apos;area virtuale.</translation>
    </message>
</context>
<context>
    <name>CSettingsWindow</name>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="130"/>
        <source>Sandboxie Plus - Global Settings</source>
        <translation>Sandboxie Plus - Impostazioni globali</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="216"/>
        <source>Auto Detection</source>
        <translation>Rilevamento automatico</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="217"/>
        <source>No Translation</source>
        <translation>Nessuna traduzione</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="237"/>
        <source>Don&apos;t integrate links</source>
        <translation>Non integrare i collegamenti</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="238"/>
        <source>As sub group</source>
        <translation>Come sottogruppo</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="239"/>
        <source>Fully integrate</source>
        <translation>Integrazione completa</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="241"/>
        <source>Don&apos;t show any icon</source>
        <translation>Disattiva icona</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="242"/>
        <source>Show Plus icon</source>
        <translation>Mostra icona Plus</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="243"/>
        <source>Show Classic icon</source>
        <translation>Mostra icona Classic</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="245"/>
        <source>All Boxes</source>
        <translation>Tutte le aree virtuali</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="246"/>
        <source>Active + Pinned</source>
        <translation>Aree virtuali attive + quelle in rilievo</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="247"/>
        <source>Pinned Only</source>
        <translation>Solo le aree virtuali in rilievo</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="249"/>
        <source>None</source>
        <translation>Nessuno</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="250"/>
        <source>Native</source>
        <translation>Nativo</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="251"/>
        <source>Qt</source>
        <translation>Qt</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="253"/>
        <source>Ignore</source>
        <translation>Ignora</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="265"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="496"/>
        <source>Search for settings</source>
        <translation>Cerca impostazioni</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="719"/>
        <location filename="Windows/SettingsWindow.cpp" line="720"/>
        <location filename="Windows/SettingsWindow.cpp" line="730"/>
        <source>Run &amp;Sandboxed</source>
        <translatorcomment>Voce relativa al menu contestuale dei file</translatorcomment>
        <translation>Avvia nell&apos;&amp;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="751"/>
        <source>Sandboxed Web Browser</source>
        <translation>Browser Web nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="254"/>
        <location filename="Windows/SettingsWindow.cpp" line="259"/>
        <source>Notify</source>
        <translation>Notifica</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="255"/>
        <location filename="Windows/SettingsWindow.cpp" line="260"/>
        <source>Download &amp; Notify</source>
        <translation>Scarica e notifica</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="256"/>
        <location filename="Windows/SettingsWindow.cpp" line="261"/>
        <source>Download &amp; Install</source>
        <translation>Scarica e installa</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="345"/>
        <source>Browse for Program</source>
        <translation>Sfoglia programma</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="412"/>
        <source>Add %1 Template</source>
        <translation>Aggiungi modello %1</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="597"/>
        <source>Please enter message</source>
        <translation>Inserire il messaggio SBIE</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="629"/>
        <source>Select Program</source>
        <translation>Seleziona programma</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="629"/>
        <source>Executables (*.exe *.cmd)</source>
        <translation>File eseguibili (*.exe *.cmd)</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="633"/>
        <location filename="Windows/SettingsWindow.cpp" line="646"/>
        <source>Please enter a menu title</source>
        <translation>Immetti il nome da assegnare al menu</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="642"/>
        <source>Please enter a command</source>
        <translation>Immetti un comando</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="964"/>
        <source>This supporter certificate has expired, please &lt;a href=&quot;sbie://update/cert&quot;&gt;get an updated certificate&lt;/a&gt;.</source>
        <translation>Questo certificato è scaduto, si prega di &lt;a href=&quot;sbie://update/cert&quot;&gt;ottenere un certificato aggiornato&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="967"/>
        <source>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;Plus features will be disabled in %1 days.&lt;/font&gt;</source>
        <translation>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;Le funzioni Plus saranno disattivate tra %1 giorni.&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="969"/>
        <source>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;For this build Plus features remain enabled.&lt;/font&gt;</source>
        <translation>&lt;br /&gt;&lt;font color=&apos;red&apos;&gt;Per questa build, le funzioni Plus resteranno attive.&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="971"/>
        <source>&lt;br /&gt;Plus features are no longer enabled.</source>
        <translation>&lt;br /&gt;Le funzioni Plus non sono più attive.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="977"/>
        <source>This supporter certificate will &lt;font color=&apos;red&apos;&gt;expire in %1 days&lt;/font&gt;, please &lt;a href=&quot;sbie://update/cert&quot;&gt;get an updated certificate&lt;/a&gt;.</source>
        <translation>Questo certificato &lt;font color=&apos;red&apos;&gt;scadrà fra %1 giorni&lt;/font&gt;, si prega di &lt;a href=&quot;sbie://update/cert&quot;&gt;ottenere un certificato aggiornato&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1006"/>
        <source>Supporter certificate required</source>
        <translation>È necessario un certificato di supporto</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1112"/>
        <source>Run &amp;Un-Sandboxed</source>
        <translatorcomment>Voce relativa al menu contestuale dei file all&apos;interno della sandbox</translatorcomment>
        <translation>Avvia all&apos;&amp;esterno dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1371"/>
        <source>This does not look like a certificate. Please enter the entire certificate, not just a portion of it.</source>
        <translation>Si prega di inserire l&apos;intero certificato, non solo una parte di esso.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1390"/>
        <source>This certificate is unfortunately expired.</source>
        <translation>Questo certificato è scaduto.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1392"/>
        <source>This certificate is unfortunately outdated.</source>
        <translation>Questo certificato è obsoleto.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1395"/>
        <source>Thank you for supporting the development of Sandboxie-Plus.</source>
        <translation>Grazie per aver sostenuto lo sviluppo di Sandboxie Plus.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1402"/>
        <source>This support certificate is not valid.</source>
        <translation>Certificato di supporto non valido.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1440"/>
        <location filename="Windows/SettingsWindow.cpp" line="1576"/>
        <source>Select Directory</source>
        <translation>Seleziona directory</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1469"/>
        <source>&lt;a href=&quot;check&quot;&gt;Check Now&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;check&quot;&gt;Controlla ora&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1536"/>
        <source>Please enter the new configuration password.</source>
        <translation>Immettere la nuova password di configurazione.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1540"/>
        <source>Please re-enter the new configuration password.</source>
        <translation>Reimmettere la nuova password di configurazione.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1545"/>
        <source>Passwords did not match, please retry.</source>
        <translation>Le password non corrispondono, si prega di riprovare.</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1557"/>
        <source>Process</source>
        <translation>Processo</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1557"/>
        <source>Folder</source>
        <translation>Cartella</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1567"/>
        <source>Please enter a program file name</source>
        <translation>Immettere il nome del programma (es. nomefile.exe)</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1635"/>
        <source>Please enter the template identifier</source>
        <translation>Inserire l&apos;identificativo del modello</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1643"/>
        <source>Error: %1</source>
        <translation>Errore: %1</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1668"/>
        <source>Do you really want to delete the selected local template(s)?</source>
        <translation>Eliminare i modelli locali selezionati?</translation>
    </message>
    <message>
        <location filename="Windows/SettingsWindow.cpp" line="1824"/>
        <source>%1 (Current)</source>
        <translation>%1 (Attuale)</translation>
    </message>
</context>
<context>
    <name>CSetupWizard</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="29"/>
        <source>Setup Wizard</source>
        <translation>Configurazione guidata</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="40"/>
        <source>The decision you make here will affect which page you get to see next.</source>
        <translation>La decisione che verrà adottata qui influenzerà la pagina successiva.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="43"/>
        <source>This help is likely not to be of any help.</source>
        <translation>È improbabile che questo aiuto serva a qualcosa.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="47"/>
        <source>Sorry, I already gave all the help I could.</source>
        <translation>Spiacente, è stato già fornito tutto l&apos;aiuto possibile.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="49"/>
        <source>Setup Wizard Help</source>
        <translation>Aiuto della configurazione guidata</translation>
    </message>
</context>
<context>
    <name>CShellPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="415"/>
        <source>Configure &lt;b&gt;Sandboxie-Plus&lt;/b&gt; shell integration</source>
        <translation>Configura l&apos;integrazione di &lt;b&gt;Sandboxie Plus&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="416"/>
        <source>Configure how Sandboxie-Plus should integrate with your system.</source>
        <translation>Configura come Sandboxie Plus dovrebbe integrarsi nel sistema.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="420"/>
        <source>Start UI with Windows</source>
        <translation>Esegui Sandboxie Plus all&apos;avvio di Windows</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="425"/>
        <source>Add &apos;Run Sandboxed&apos; to the explorer context menu</source>
        <translation>Aggiungi l&apos;opzione «Avvia nell&apos;area virtuale» al menu contestuale</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="430"/>
        <source>Add desktop shortcut for starting Web browser under Sandboxie</source>
        <translation>Aggiungi un collegamento sul desktop per l&apos;avvio del browser Web in Sandboxie</translation>
    </message>
</context>
<context>
    <name>CSnapshotsWindow</name>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="24"/>
        <source>%1 - Snapshots</source>
        <translation>%1 - Istantanee</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="38"/>
        <source>Snapshot</source>
        <translation>Istantanea</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="56"/>
        <source>Revert to empty box</source>
        <translation>Ripristina allo stato iniziale</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="103"/>
        <source> (default)</source>
        <translation> (default)</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="173"/>
        <source>Please enter a name for the new Snapshot.</source>
        <translation>Immettere un nome per la nuova istantanea.</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="173"/>
        <source>New Snapshot</source>
        <translation>Nuova istantanea</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="196"/>
        <source>Do you really want to switch the active snapshot? Doing so will delete the current state!</source>
        <translation>Ripristinare l&apos;istantanea selezionata? Questo comporterà la rimozione dello stato corrente!</translation>
    </message>
    <message>
        <location filename="Windows/SnapshotsWindow.cpp" line="230"/>
        <source>Do you really want to delete the selected snapshot?</source>
        <translation>Eliminare l&apos;istantanea selezionata?</translation>
    </message>
</context>
<context>
    <name>CSummaryPage</name>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="525"/>
        <source>Create the new Sandbox</source>
        <translation>Crea nuova area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="533"/>
        <source>Almost complete, click Finish to create a new sandbox and conclude the wizard.</source>
        <translation>Hai quasi finito, fare clic su Fine per creare una nuova area virtuale e concludere la procedura guidata.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="542"/>
        <source>Save options as new defaults</source>
        <translation>Salva le opzioni come default</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="553"/>
        <source>Don&apos;t show the summary page in future (unless advanced options were set)</source>
        <translation>Non mostrare la pagina di riepilogo in futuro (a meno che non siano state definite opzioni avanzate)</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="572"/>
        <source>
This Sandbox will be saved to: %1</source>
        <translation>
Questa area virtuale verrà salvata in: %1</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="575"/>
        <source>
This box&apos;s content will be DISCARDED when it&apos;s closed, and the box will be removed.</source>
        <translation>
Il contenuto di questa area virtuale verrà SCARTATO alla chiusura e l&apos;area virtuale sarà rimossa.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="577"/>
        <source>
This box will DISCARD its content when its closed, its suitable only for temporary data.</source>
        <translation>
Quest&apos;area virtuale SCARTERÀ il suo contenuto non appena viene chiusa, è adatta solo per dati temporanei.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="579"/>
        <source>
Processes in this box will not be able to access the internet or the local network, this ensures all accessed data to stay confidential.</source>
        <translation>
I processi in questa area virtuale non potranno accedere a Internet o alla rete locale, in modo da garantire la riservatezza di tutti i dati consultati.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="581"/>
        <source>
This box will run the MSIServer (*.msi installer service) with a system token, this improves the compatibility but reduces the security isolation.</source>
        <translation>
Quest&apos;area virtuale eseguirà Windows Installer (servizio di installazione *.msi) con un token di sistema, questo migliora la compatibilità ma riduce l&apos;isolamento di sicurezza.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="583"/>
        <source>
Processes in this box will think they are run with administrative privileges, without actually having them, hence installers can be used even in a security hardened box.</source>
        <translation>
I processi in questa area virtuale penseranno di essere eseguiti con privilegi amministrativi, senza averli realmente, quindi gli installer possono essere usati anche in un&apos;area virtuale ristretta.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="585"/>
        <source>
Processes in this box will be running with a custom process token indicating the sandbox they belong to.</source>
        <oldsource>
Processes in this box will be running with a custom process token indicating the sandbox thay belong to.</oldsource>
        <translation>
I processi in questa area virtuale verranno eseguiti con un token di processo personalizzato che indica l&amp;apos;area virtuale a cui appartengono.</translation>
    </message>
    <message>
        <location filename="Wizards/NewBoxWizard.cpp" line="618"/>
        <source>Failed to create new box: %1</source>
        <translation>Impossibile creare la nuova area virtuale: %1</translation>
    </message>
</context>
<context>
    <name>CSupportDialog</name>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="115"/>
        <source>The installed supporter certificate &lt;b&gt;has expired %1 days ago&lt;/b&gt; and &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;must be renewed&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>Il certificato di supporto in uso &lt;b&gt;è scaduto %1 giorni fa&lt;/b&gt; e &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;deve essere rinnovato&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="117"/>
        <source>&lt;b&gt;You have installed Sandboxie-Plus more than %1 days ago.&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</source>
        <translation>&lt;b&gt;Sandboxie Plus è stato installato più di %1 giorni fa.&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="119"/>
        <source>&lt;u&gt;Commercial use of Sandboxie past the evaluation period&lt;/u&gt;, requires a valid &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;support certificate&lt;/a&gt;.</source>
        <translation>&lt;u&gt;L&apos;uso commerciale di Sandboxie dopo il periodo di valutazione&lt;/u&gt; richiede un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;certificato di supporto&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="126"/>
        <source>The installed supporter certificate is &lt;b&gt;outdated&lt;/b&gt; and it is &lt;u&gt;not valid for&lt;b&gt; this version&lt;/b&gt;&lt;/u&gt; of Sandboxie-Plus.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>Il certificato di supporto in uso è &lt;b&gt;obsoleto&lt;/b&gt; e &lt;u&gt;non valido&lt;b&gt; per questa versione&lt;/b&gt;&lt;/u&gt; di Sandboxie Plus.&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="128"/>
        <source>The installed supporter certificate is &lt;b&gt;expired&lt;/b&gt; and &lt;u&gt;should be renewed&lt;/u&gt;.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>Il certificato di supporto in uso è &lt;b&gt;scaduto&lt;/b&gt; e &lt;u&gt;deve essere rinnovato&lt;/u&gt;.&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="130"/>
        <source>&lt;b&gt;You have been using Sandboxie-Plus for more than %1 days now.&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</source>
        <translation>&lt;b&gt;Si sta utilizzando Sandboxie Plus da più di %1 giorni.&lt;/b&gt;&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="133"/>
        <source>Sandboxie on ARM64 requires a valid supporter certificate for continued use.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>Sandboxie su ARM64 richiede un valido certificato di supporto per un uso continuativo.&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="135"/>
        <source>Personal use of Sandboxie is free of charge on x86/x64, although some functionality is only available to project supporters.&lt;br /&gt;&lt;br /&gt;</source>
        <translation>L&apos;uso personale di Sandboxie è gratuito su x86/x64, mentre alcune funzionalità sono disponibili solo per i sostenitori del progetto.&lt;br /&gt;&lt;br /&gt;</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="138"/>
        <source>Please continue &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt; by renewing your &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt; and continue using the &lt;b&gt;enhanced functionality&lt;/b&gt; in new builds.</source>
        <translation>Si prega di &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;sostenere il progetto&lt;/a&gt; rinnovando il &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;certificato di supporto&lt;/a&gt; per l&apos;utilizzo delle &lt;b&gt;funzionalità avanzate&lt;/b&gt; nelle nuove versioni.</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="141"/>
        <source>Sandboxie &lt;u&gt;without&lt;/u&gt; a valid supporter certificate will sometimes &lt;b&gt;&lt;font color=&apos;red&apos;&gt;pause for a few seconds&lt;/font&gt;&lt;/b&gt;, to give you time to contemplate the option of &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;A &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt; not just removes this reminder, but also enables &lt;b&gt;exclusive enhanced functionality&lt;/b&gt; providing better security and compatibility.</source>
        <translation>&lt;u&gt;Senza&lt;/u&gt; un valido certificato di supporto, Sandboxie &lt;b&gt;&lt;font color=&apos;red&apos;&gt;si fermerà per alcuni secondi&lt;/font&gt;&lt;/b&gt;in modo da valutare la possibilità di &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;sostenere il progetto&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;Un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;certificato di supporto&lt;/a&gt; non solo rimuove questo promemoria, ma consente di attivare &lt;b&gt;funzionalità avanzate&lt;/b&gt; garantendo una maggiore sicurezza e compatibilità.</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="172"/>
        <source>Sandboxie-Plus - Support Reminder</source>
        <translation>Sandboxie Plus - Promemoria di supporto</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="251"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="258"/>
        <source>Quit</source>
        <translation>Esci</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="259"/>
        <source>Continue</source>
        <translation>Continua</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="260"/>
        <source>Get Certificate</source>
        <translation>Ottieni certificato</translation>
    </message>
    <message>
        <location filename="Windows/SupportDialog.cpp" line="261"/>
        <source>Enter Certificate</source>
        <translation>Inserisci certificato</translation>
    </message>
</context>
<context>
    <name>CTemplateTypePage</name>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="258"/>
        <source>Create new Template</source>
        <translation>Crea nuovo modello</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="267"/>
        <source>Select template type:</source>
        <translation>Seleziona tipo di modello:</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="271"/>
        <source>%1 template</source>
        <translation>Modello %1</translation>
    </message>
</context>
<context>
    <name>CTemplateWizard</name>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="37"/>
        <source>Compatibility Template Wizard</source>
        <translation>Creazione guidata di modelli di compatibilità</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="48"/>
        <source>Custom</source>
        <translation>Personalizzato</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="49"/>
        <source>Web Browser</source>
        <translation>Browser Web</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="82"/>
        <source>Force %1 to run in this sandbox</source>
        <translation>Forza l&apos;avvio di %1 su quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="100"/>
        <source>Allow direct access to the entire %1 profile folder</source>
        <translation>Consenti l&apos;accesso diretto all&apos;intera cartella del profilo di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="113"/>
        <location filename="Wizards/TemplateWizard.cpp" line="168"/>
        <source>Allow direct access to %1 phishing database</source>
        <translation>Consenti l&apos;accesso diretto al database anti-phishing di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="127"/>
        <source>Allow direct access to %1 session management</source>
        <translation>Consenti l&apos;accesso diretto alla gestione della sessione di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="136"/>
        <location filename="Wizards/TemplateWizard.cpp" line="199"/>
        <source>Allow direct access to %1 passwords</source>
        <translation>Consenti l&apos;accesso diretto alle password di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="146"/>
        <location filename="Wizards/TemplateWizard.cpp" line="208"/>
        <source>Allow direct access to %1 cookies</source>
        <translation>Consenti l&apos;accesso diretto ai cookie di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="155"/>
        <location filename="Wizards/TemplateWizard.cpp" line="227"/>
        <source>Allow direct access to %1 bookmark and history database</source>
        <translation>Consenti l&apos;accesso diretto al database dei segnalibri e della cronologia di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="180"/>
        <source>Allow direct access to %1 sync data</source>
        <translation>Consenti l&apos;accesso diretto alla sincronizzazione dati di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="190"/>
        <source>Allow direct access to %1 preferences</source>
        <translation>Consenti l&apos;accesso diretto alle preferenze di %1</translation>
    </message>
    <message>
        <location filename="Wizards/TemplateWizard.cpp" line="217"/>
        <source>Allow direct access to %1 bookmarks</source>
        <translation>Consenti l&apos;accesso diretto ai segnalibri di %1</translation>
    </message>
</context>
<context>
    <name>CTraceModel</name>
    <message>
        <location filename="Models/TraceModel.cpp" line="196"/>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="175"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="176"/>
        <source>Process %1</source>
        <translation>Processo %1</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="179"/>
        <source>Thread %1</source>
        <translation>Thread %1</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="333"/>
        <source>Process</source>
        <translation>Processo</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="335"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="336"/>
        <source>Status</source>
        <translation>Stato</translation>
    </message>
    <message>
        <location filename="Models/TraceModel.cpp" line="337"/>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
</context>
<context>
    <name>CTraceView</name>
    <message>
        <location filename="Views/TraceView.cpp" line="201"/>
        <source>Show as task tree</source>
        <translation>Mostra come albero processi</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="205"/>
        <source>Show NT Object Tree</source>
        <translation>Mostra albero degli oggetti NT</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="212"/>
        <source>PID:</source>
        <translation>PID:</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="214"/>
        <location filename="Views/TraceView.cpp" line="221"/>
        <location filename="Views/TraceView.cpp" line="230"/>
        <location filename="Views/TraceView.cpp" line="231"/>
        <location filename="Views/TraceView.cpp" line="240"/>
        <location filename="Views/TraceView.cpp" line="481"/>
        <location filename="Views/TraceView.cpp" line="484"/>
        <location filename="Views/TraceView.cpp" line="581"/>
        <source>[All]</source>
        <translation>[Tutti]</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="219"/>
        <source>TID:</source>
        <translation>TID:</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="227"/>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="238"/>
        <source>Status:</source>
        <translation>Stato:</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="241"/>
        <source>Open</source>
        <translation>Consentito</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="242"/>
        <source>Closed</source>
        <translation>Non consentito</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="243"/>
        <source>Trace</source>
        <translation>Tracciamento</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="244"/>
        <source>Other</source>
        <translation>Altro</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="252"/>
        <source>Show All Boxes</source>
        <translation>Mostra tutte le aree virtuali</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="259"/>
        <source>Save to file</source>
        <translation>Salva su file</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="273"/>
        <source>Cleanup Trace Log</source>
        <translation>Pulisci log di accesso</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="624"/>
        <source>Save trace log to file</source>
        <translation>Salva log su file</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="630"/>
        <source>Failed to open log file for writing</source>
        <translation>Impossibile aprire il file di log per la scrittura</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="650"/>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="554"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="197"/>
        <source>Monitor mode</source>
        <translation>Modalità monitor</translation>
    </message>
    <message>
        <location filename="Views/TraceView.cpp" line="561"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
</context>
<context>
    <name>CTraceWindow</name>
    <message>
        <location filename="Views/TraceView.cpp" line="683"/>
        <source>Sandboxie-Plus - Trace Monitor</source>
        <translation>Sandboxie Plus - Monitor accesso risorse</translation>
    </message>
</context>
<context>
    <name>CUIPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="300"/>
        <source>Configure &lt;b&gt;Sandboxie-Plus&lt;/b&gt; UI</source>
        <translation>Configura interfaccia di &lt;b&gt;Sandboxie Plus&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="301"/>
        <source>Select the user interface style you prefer.</source>
        <translation>Selezionare lo stile di interfaccia utente che si preferisce.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="305"/>
        <source>&amp;Advanced UI for experts</source>
        <translation>Interfaccia &amp;avanzata per esperti</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="310"/>
        <source>&amp;Simple UI for beginners</source>
        <translation>Interfaccia &amp;semplice per principianti</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="315"/>
        <source>&amp;Vintage SbieCtrl.exe UI</source>
        <translation>Interfaccia &amp;classica in stile SbieCtrl.exe</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="340"/>
        <source>Use Bright Mode</source>
        <translation>Usa tema chiaro</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="344"/>
        <source>Use Dark Mode</source>
        <translation>Usa tema scuro</translation>
    </message>
</context>
<context>
    <name>CWFPPage</name>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="451"/>
        <source>Configure &lt;b&gt;Sandboxie-Plus&lt;/b&gt; network filtering</source>
        <translation>Configura filtri di rete in &lt;b&gt;Sandboxie Plus&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="452"/>
        <source>Sandboxie can use the Windows Filtering Platform (WFP) to restrict network access.</source>
        <translation>Sandboxie può utilizzare la piattaforma di filtraggio di Windows (WFP) per limitare l&apos;accesso di rete.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="458"/>
        <source>Using WFP allows Sandboxie to reliably enforce IP/Port based rules for network access. Unlike system level application firewalls, Sandboxie can use different rules in each box for the same application. If you already have a good and reliable application firewall and do not need per box rules, you can leave this option unchecked. Without WFP enabled, Sandboxie will still be able to reliably and entirely block processes from accessing the network. However, this can cause the process to crash, as the driver blocks the required network device endpoints. Even with WFP disabled, Sandboxie offers to set IP/Port based rules, however these will be applied in user mode only and not be enforced by the driver. Hence, without WFP enabled, an intentionally malicious process could bypass those rules, but not the entire network block.</source>
        <translation>L&apos;uso di WFP consente a Sandboxie di applicare in modo affidabile regole basate su IP/porta per l&apos;accesso alla rete. A differenza dei firewall applicativi a livello di sistema, Sandboxie può utilizzare regole diverse in ogni area virtuale per la stessa applicazione. Se disponete già di un buon firewall applicativo affidabile e non avete bisogno di regole per ogni area virtuale, potete lasciare questa opzione deselezionata. Senza WFP attivo, Sandboxie sarà comunque in grado di bloccare in modo affidabile e completo i processi di accesso alla rete. Tuttavia, ciò potrebbe causare l&apos;interruzione del processo, poiché il driver blocca gli endpoint dei dispositivi di rete richiesti. Anche con il WFP disattivato, Sandboxie offre la possibilità di impostare regole basate su IP/porta, ma in questo caso saranno applicate solo in modalità utente e non dal driver. Pertanto, senza WFP attivo, un processo intenzionalmente dannoso potrebbe aggirare tali regole, ma non l&apos;intero blocco di rete.</translation>
    </message>
    <message>
        <location filename="Wizards/SetupWizard.cpp" line="467"/>
        <source>Enable Windows Filtering Platform (WFP) support</source>
        <translation>Attiva il supporto alla piattaforma di filtraggio di Windows (WFP)</translation>
    </message>
</context>
<context>
    <name>NewBoxWindow</name>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="32"/>
        <source>SandboxiePlus new box</source>
        <translation>Sandboxie Plus - Nuova area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="60"/>
        <source>Box Type Preset:</source>
        <translation>Tipo di area virtuale:</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="91"/>
        <source>A sandbox isolates your host system from processes running within the box, it prevents them from making permanent changes to other programs and data in your computer. The level of isolation impacts your security as well as the compatibility with applications, hence there will be a different level of isolation depending on the selected Box Type. Sandboxie can also protect your personal data from being accessed by processes running under its supervision.</source>
        <translation>Un&apos;area virtuale isola il sistema dai processi avviati nell&apos;area virtuale, impedendogli di effettuare modifiche permanenti ad altri programmi e ai dati presenti nel computer. Il livello di isolamento impatta la tua sicurezza tanto quanto la compatibilità con le applicazioni, quindi ci sarà un livello diverso di isolamento in funzione del tipo di area virtuale selezionata. Sandboxie può anche proteggere i dati personali dall&apos;accesso di processi avviati sotto la sua supervisione.</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="101"/>
        <source>Box info</source>
        <translation>Informazioni area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/NewBoxWindow.ui" line="67"/>
        <source>Sandbox Name:</source>
        <translation>Nome area virtuale:</translation>
    </message>
</context>
<context>
    <name>OptionsWindow</name>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="32"/>
        <source>SandboxiePlus Options</source>
        <translation>Sandboxie Plus - Opzioni</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="52"/>
        <source>General Options</source>
        <translation>Opzioni generali</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="62"/>
        <source>Box Options</source>
        <translation>Opzioni area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="252"/>
        <source>Appearance</source>
        <translation>Aspetto</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="221"/>
        <source>px Width</source>
        <translation>px di larghezza</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="96"/>
        <source>Sandbox Indicator in title:</source>
        <translation>Simbolo area virtuale nel titolo:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="106"/>
        <source>Sandboxed window border:</source>
        <translation>Bordo finestra:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="730"/>
        <location filename="Forms/OptionsWindow.ui" line="766"/>
        <location filename="Forms/OptionsWindow.ui" line="783"/>
        <location filename="Forms/OptionsWindow.ui" line="992"/>
        <location filename="Forms/OptionsWindow.ui" line="1037"/>
        <source>Protect the system from sandboxed processes</source>
        <translation>Proteggi il sistema dai processi avviati nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="995"/>
        <source>Elevation restrictions</source>
        <translation>Restrizioni di elevazione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="695"/>
        <source>Block network files and folders, unless specifically opened.</source>
        <translation>Blocca i file e le cartelle di rete, a meno che non siano aperti individualmente.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1002"/>
        <source>Make applications think they are running elevated (allows to run installers safely)</source>
        <translation>Fai credere alle applicazioni di avviarsi con privilegi elevati (esegue gli installer in modo sicuro)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="786"/>
        <source>Network restrictions</source>
        <translation>Restrizioni di rete</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1080"/>
        <source>Drop rights from Administrators and Power Users groups</source>
        <translation>Limita i privilegi dei gruppi Administrators e Power Users</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1016"/>
        <source>(Recommended)</source>
        <translation>(Raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="279"/>
        <source>File Options</source>
        <translation>Opzioni file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="324"/>
        <source>Auto delete content when last sandboxed process terminates</source>
        <translation>Elimina automaticamente il contenuto dell&apos;area virtuale una volta terminato l&apos;ultimo processo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="453"/>
        <source>Copy file size limit:</source>
        <translation>Limite massimo della dimensione dei file:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="410"/>
        <source>Box Delete options</source>
        <translation>Eliminazione dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="294"/>
        <source>Protect this sandbox from deletion or emptying</source>
        <translation>Proteggi l&apos;area virtuale dall&apos;eliminazione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="433"/>
        <location filename="Forms/OptionsWindow.ui" line="474"/>
        <source>File Migration</source>
        <translation>Copia dei file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="301"/>
        <source>Allow elevated sandboxed applications to read the harddrive</source>
        <translation>Consenti alle applicazioni elevate nell&apos;area virtuale di leggere il disco fisso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="287"/>
        <source>Warn when an application opens a harddrive handle</source>
        <translation>Avvisa quando un&apos;applicazione apre un handle del disco fisso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="503"/>
        <source>kilobytes</source>
        <translation>kilobyte</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="596"/>
        <source>Issue message 2102 when a file is too large</source>
        <translation>Mostra messaggio 2102 quando la dimensione di un file è troppo grande</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="702"/>
        <source>Remove spooler restriction, printers can be installed outside the sandbox</source>
        <translation>Rimuovi il blocco allo spooler di stampa, i driver di stampa possono essere installati all&apos;esterno dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="688"/>
        <source>Allow the print spooler to print to files outside the sandbox</source>
        <translation>Consenti allo spooler di stampa di stampare i file all&apos;esterno dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="675"/>
        <source>Block access to the printer spooler</source>
        <translation>Blocca accesso allo spooler di stampa</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="733"/>
        <source>Other restrictions</source>
        <translation>Altre restrizioni</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="769"/>
        <source>Printing restrictions</source>
        <translation>Restrizioni di stampa</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="709"/>
        <source>Open System Protected Storage</source>
        <translation>Apri il servizio di archiviazione protetta (fino a Windows 7)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="172"/>
        <source>Show this box in the &apos;run in box&apos; selection prompt</source>
        <translation>Mostra quest&apos;area virtuale nella finestra di selezione delle aree virtuali da avviare</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1121"/>
        <source>Security note: Elevated applications running under the supervision of Sandboxie, with an admin or system token, have more opportunities to bypass isolation and modify the system outside the sandbox.</source>
        <translation>Avviso di sicurezza: Le applicazioni elevate sotto la supervisione di Sandboxie, con token amministrativo o di sistema, hanno maggiori possibilità di superare l&apos;isolamento e di modificare il sistema all&apos;esterno dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1047"/>
        <source>Allow MSIServer to run with a sandboxed system token and apply other exceptions if required</source>
        <translation>Consenti l&apos;avvio di Windows Installer con un token di sistema nell&apos;area virtuale e di applicare ulteriori eccezioni se richiesto</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1104"/>
        <source>Note: Msi Installer Exemptions should not be required, but if you encounter issues installing a msi package which you trust, this option may help the installation complete successfully. You can also try disabling drop admin rights.</source>
        <translation>Nota: Le eccezioni a Windows Installer non dovrebbero essere necessarie, tranne che in caso di problemi nell&apos;installare un eseguibile .msi di cui ci si fida. In caso contrario, si consiglia di disattivare la limitazione dei privilegi amministrativi.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="641"/>
        <source>Block read access to the clipboard</source>
        <translation>Blocca accesso agli appunti di Windows</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="796"/>
        <source>Run Menu</source>
        <translation>Menu Avvia</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="925"/>
        <source>You can configure custom entries for the sandbox run menu.</source>
        <translation>Qui è possibile inserire nuove voci personalizzate per il menu Avvia di Sandboxie Plus.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="869"/>
        <location filename="Forms/OptionsWindow.ui" line="1615"/>
        <location filename="Forms/OptionsWindow.ui" line="1757"/>
        <location filename="Forms/OptionsWindow.ui" line="1843"/>
        <location filename="Forms/OptionsWindow.ui" line="1988"/>
        <location filename="Forms/OptionsWindow.ui" line="2033"/>
        <location filename="Forms/OptionsWindow.ui" line="2111"/>
        <location filename="Forms/OptionsWindow.ui" line="2963"/>
        <location filename="Forms/OptionsWindow.ui" line="3185"/>
        <location filename="Forms/OptionsWindow.ui" line="3301"/>
        <location filename="Forms/OptionsWindow.ui" line="4438"/>
        <location filename="Forms/OptionsWindow.ui" line="4514"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="879"/>
        <source>Command Line</source>
        <translation>Riga di comando</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="845"/>
        <source>Add program</source>
        <translation>Aggiungi programma</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="826"/>
        <location filename="Forms/OptionsWindow.ui" line="1640"/>
        <location filename="Forms/OptionsWindow.ui" line="1784"/>
        <location filename="Forms/OptionsWindow.ui" line="1851"/>
        <location filename="Forms/OptionsWindow.ui" line="1963"/>
        <location filename="Forms/OptionsWindow.ui" line="2061"/>
        <location filename="Forms/OptionsWindow.ui" line="2139"/>
        <location filename="Forms/OptionsWindow.ui" line="2231"/>
        <location filename="Forms/OptionsWindow.ui" line="2365"/>
        <location filename="Forms/OptionsWindow.ui" line="2464"/>
        <location filename="Forms/OptionsWindow.ui" line="2545"/>
        <location filename="Forms/OptionsWindow.ui" line="2658"/>
        <location filename="Forms/OptionsWindow.ui" line="2932"/>
        <location filename="Forms/OptionsWindow.ui" line="3074"/>
        <location filename="Forms/OptionsWindow.ui" line="3223"/>
        <location filename="Forms/OptionsWindow.ui" line="3309"/>
        <location filename="Forms/OptionsWindow.ui" line="3603"/>
        <location filename="Forms/OptionsWindow.ui" line="3736"/>
        <location filename="Forms/OptionsWindow.ui" line="3805"/>
        <location filename="Forms/OptionsWindow.ui" line="3930"/>
        <location filename="Forms/OptionsWindow.ui" line="3989"/>
        <location filename="Forms/OptionsWindow.ui" line="4458"/>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1752"/>
        <location filename="Forms/OptionsWindow.ui" line="1838"/>
        <location filename="Forms/OptionsWindow.ui" line="2242"/>
        <location filename="Forms/OptionsWindow.ui" line="2342"/>
        <location filename="Forms/OptionsWindow.ui" line="2475"/>
        <location filename="Forms/OptionsWindow.ui" line="2595"/>
        <location filename="Forms/OptionsWindow.ui" line="2669"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1583"/>
        <source>Program Groups</source>
        <translation>Gruppi dei programmi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1591"/>
        <source>Add Group</source>
        <translation>Aggiungi gruppo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1623"/>
        <location filename="Forms/OptionsWindow.ui" line="1977"/>
        <location filename="Forms/OptionsWindow.ui" line="2054"/>
        <location filename="Forms/OptionsWindow.ui" line="2132"/>
        <location filename="Forms/OptionsWindow.ui" line="2918"/>
        <source>Add Program</source>
        <translation>Aggiungi programma</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1734"/>
        <source>Force Folder</source>
        <translation>Forza cartella</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2257"/>
        <location filename="Forms/OptionsWindow.ui" line="2357"/>
        <location filename="Forms/OptionsWindow.ui" line="2490"/>
        <source>Path</source>
        <translation>Percorso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1777"/>
        <source>Force Program</source>
        <translation>Forza programma</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="550"/>
        <location filename="Forms/OptionsWindow.ui" line="1647"/>
        <location filename="Forms/OptionsWindow.ui" line="1741"/>
        <location filename="Forms/OptionsWindow.ui" line="1877"/>
        <location filename="Forms/OptionsWindow.ui" line="1970"/>
        <location filename="Forms/OptionsWindow.ui" line="2068"/>
        <location filename="Forms/OptionsWindow.ui" line="2184"/>
        <location filename="Forms/OptionsWindow.ui" line="2224"/>
        <location filename="Forms/OptionsWindow.ui" line="2331"/>
        <location filename="Forms/OptionsWindow.ui" line="2457"/>
        <location filename="Forms/OptionsWindow.ui" line="2552"/>
        <location filename="Forms/OptionsWindow.ui" line="2692"/>
        <location filename="Forms/OptionsWindow.ui" line="3120"/>
        <location filename="Forms/OptionsWindow.ui" line="3216"/>
        <location filename="Forms/OptionsWindow.ui" line="3323"/>
        <location filename="Forms/OptionsWindow.ui" line="3562"/>
        <location filename="Forms/OptionsWindow.ui" line="3753"/>
        <location filename="Forms/OptionsWindow.ui" line="3760"/>
        <location filename="Forms/OptionsWindow.ui" line="4025"/>
        <source>Show Templates</source>
        <translation>Mostra modelli</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="238"/>
        <source>General Configuration</source>
        <translation>Configurazione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="211"/>
        <source>Box Type Preset:</source>
        <translation>Tipo di area virtuale:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="179"/>
        <source>Box info</source>
        <translation>Informazioni area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="142"/>
        <source>&lt;b&gt;More Box Types&lt;/b&gt; are exclusively available to &lt;u&gt;project supporters&lt;/u&gt;, the Privacy Enhanced boxes &lt;b&gt;&lt;font color=&apos;red&apos;&gt;protect user data from illicit access&lt;/font&gt;&lt;/b&gt; by the sandboxed programs.&lt;br /&gt;If you are not yet a supporter, then please consider &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporting the project&lt;/a&gt;, to receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;supporter certificate&lt;/a&gt;.&lt;br /&gt;You can test the other box types by creating new sandboxes of those types, however processes in these will be auto terminated after 5 minutes.</source>
        <translation>&lt;b&gt;Nuovi tipi di aree virtuali&lt;/b&gt; sono disponibili esclusivamente per &lt;u&gt;i sostenitori del progetto&lt;/u&gt;. Le aree virtuali con Privacy avanzata &lt;b&gt;&lt;font color=&apos;red&apos;&gt;proteggono i dati utente da accessi non autorizzati&lt;/font&gt;&lt;/b&gt; nei programmi eseguiti.&lt;br /&gt;Se non sei un sostenitore, si prega di &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;di supportare Sandboxie Plus&lt;/a&gt; per ricevere un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;certificato di supporto&lt;/a&gt;.&lt;br /&gt;Senza certificato è possibile utilizzare i nuovi tipi di aree virtuali, ma in questo caso i processi verranno terminati automaticamente dopo 5 minuti.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="621"/>
        <source>Open Windows Credentials Store (user mode)</source>
        <translation>Apri il servizio di gestione credenziali di Windows (user mode)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="661"/>
        <source>Prevent change to network and firewall parameters (user mode)</source>
        <translation>Blocca la modifica dei parametri di rete e firewall (user mode)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1699"/>
        <source>Programs entered here, or programs started from entered locations, will be put in this sandbox automatically, unless they are explicitly started in another sandbox.</source>
        <translation>I seguenti programmi, o i programmi avviati dai seguenti percorsi, verranno avviati automaticamente in quest&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1920"/>
        <source>Stop Behaviour</source>
        <translation>Chiusura dei processi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2092"/>
        <source>Start Restrictions</source>
        <translation>Restrizioni di avvio</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2100"/>
        <source>Issue message 1308 when a program fails to start</source>
        <translation>Mostra messaggio 1308 quando un programma non viene avviato</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2151"/>
        <source>Allow only selected programs to start in this sandbox. *</source>
        <translation>Consenti l&apos;avvio dei programmi selezionati nell&apos;area virtuale. *</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2158"/>
        <source>Prevent selected programs from starting in this sandbox.</source>
        <translation>Blocca l&apos;esecuzione dei programmi selezionati nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2165"/>
        <source>Allow all programs to start in this sandbox.</source>
        <translation>Consenti l&apos;avvio di tutti i programmi nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2172"/>
        <source>* Note: Programs installed to this sandbox won&apos;t be able to start at all.</source>
        <translation>* Nota: i programmi installati nell&apos;area virtuale non potranno essere avviati o eseguiti.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2891"/>
        <source>Process Restrictions</source>
        <translation>Restrizioni dei processi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2911"/>
        <source>Issue message 1307 when a program is denied internet access</source>
        <translation>Mostra messaggio 1307 quando è negato l&apos;accesso a internet</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2939"/>
        <source>Note: Programs installed to this sandbox won&apos;t be able to access the internet at all.</source>
        <translation>Nota: i programmi installati nell&apos;area virtuale non potranno accedere a internet.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2925"/>
        <source>Prompt user whether to allow an exemption from the blockade.</source>
        <translation>Chiedi all&apos;utente se consentire un&apos;esclusione dal blocco.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2194"/>
        <source>Resource Access</source>
        <translation>Accesso risorse</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="566"/>
        <location filename="Forms/OptionsWindow.ui" line="2247"/>
        <location filename="Forms/OptionsWindow.ui" line="2347"/>
        <location filename="Forms/OptionsWindow.ui" line="2480"/>
        <location filename="Forms/OptionsWindow.ui" line="2600"/>
        <location filename="Forms/OptionsWindow.ui" line="2674"/>
        <location filename="Forms/OptionsWindow.ui" line="3092"/>
        <location filename="Forms/OptionsWindow.ui" line="4012"/>
        <source>Program</source>
        <translation>Programma</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2252"/>
        <location filename="Forms/OptionsWindow.ui" line="2352"/>
        <location filename="Forms/OptionsWindow.ui" line="2485"/>
        <location filename="Forms/OptionsWindow.ui" line="2605"/>
        <location filename="Forms/OptionsWindow.ui" line="2679"/>
        <location filename="Forms/OptionsWindow.ui" line="2968"/>
        <source>Access</source>
        <translation>Accesso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2384"/>
        <source>Add Reg Key</source>
        <translation>Aggiungi chiave di registro</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2277"/>
        <source>Add File/Folder</source>
        <translation>Aggiungi file/cartella</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2571"/>
        <source>Add Wnd Class</source>
        <translation>Aggiungi classe finestra</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2711"/>
        <source>Add COM Object</source>
        <translation>Aggiungi oggetto COM</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2450"/>
        <source>Add IPC Path</source>
        <translation>Aggiungi percorso IPC</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3151"/>
        <source>File Recovery</source>
        <translation>Recupero file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3230"/>
        <source>Add Folder</source>
        <translation>Aggiungi cartella</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3270"/>
        <source>Ignore Extension</source>
        <translation>Ignora estensione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3316"/>
        <source>Ignore Folder</source>
        <translation>Ignora cartella</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3277"/>
        <source>Enable Immediate Recovery prompt to be able to recover files as soon as they are created.</source>
        <translation>Attiva notifica di Recupero immediato dei file, non appena questi vengono creati.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3260"/>
        <source>You can exclude folders and file types (or file extensions) from Immediate Recovery.</source>
        <translation>È possibile escludere estensioni di file e cartelle dal Recupero immediato.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3193"/>
        <source>When the Quick Recovery function is invoked, the following folders will be checked for sandboxed content. </source>
        <translation>Una volta richiamata la funzione di Recupero veloce, verrà analizzato il contenuto delle seguenti cartelle nell&apos;area virtuale. </translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3358"/>
        <source>Advanced Options</source>
        <translation>Opzioni avanzate</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3950"/>
        <source>Miscellaneous</source>
        <translation>Opzioni varie</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1252"/>
        <location filename="Forms/OptionsWindow.ui" line="1269"/>
        <location filename="Forms/OptionsWindow.ui" line="1354"/>
        <location filename="Forms/OptionsWindow.ui" line="1426"/>
        <location filename="Forms/OptionsWindow.ui" line="1450"/>
        <location filename="Forms/OptionsWindow.ui" line="1474"/>
        <source>Protect the sandbox integrity itself</source>
        <translation>Proteggi l&apos;integrità dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1505"/>
        <source>Do not start sandboxed services using a system token (recommended)</source>
        <translation>Non avviare servizi nell&apos;area virtuale tramite token di sistema (raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3375"/>
        <location filename="Forms/OptionsWindow.ui" line="3424"/>
        <source>Compatibility</source>
        <translation>Compatibilità</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3403"/>
        <source>Force usage of custom dummy Manifest files (legacy behaviour)</source>
        <translation>Forza l&apos;utilizzo dei file manifest fittizi (legacy)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2618"/>
        <source>Don&apos;t alter window class names created by sandboxed programs</source>
        <translatorcomment>Da attivare solo per motivi di compatibilità</translatorcomment>
        <translation>Blocca la modifica dei nomi della classe finestra effettuata da Sandboxie</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1525"/>
        <source>Allow only privileged processes to access the Service Control Manager</source>
        <translation>Consenti solo ai processi privilegiati di accedere al Service Control Manager</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1094"/>
        <source>CAUTION: When running under the built in administrator, processes can not drop administrative privileges.</source>
        <translation>ATTENZIONE: Nel caso di processi in esecuzione tramite l&apos;account amministratore nascosto, non sarà possibile limitare i privilegi amministrativi.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="460"/>
        <source>Prompt user for large file migration</source>
        <translation>Avvisa l&apos;utente durante la copia dei file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3410"/>
        <source>Emulate sandboxed window station for all processes</source>
        <translation>Emula window station per tutti i processi nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1279"/>
        <source>Allow sandboxed programs to manage Hardware/Devices</source>
        <translation>Consenti ai programmi nell&apos;area virtuale di gestire dispositivi hardware</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1630"/>
        <source>You can group programs together and give them a group name.  Program groups can be used with some of the settings instead of program names. Groups defined for the box overwrite groups defined in templates.</source>
        <translation>È possibile riunire più programmi in un unico nome di gruppo. I gruppi dei programmi possono essere usati per interagire con alcune impostazioni al posto dei nomi dei programmi. I gruppi definiti nell&apos;area virtuale sovrascrivono i gruppi definiti nei modelli.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2978"/>
        <source>Set network/internet access for unlisted processes:</source>
        <translation>Imposta accesso di rete/internet per i processi non presenti in elenco:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3025"/>
        <source>Test Rules, Program:</source>
        <translation>Regole di prova, Programma:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3035"/>
        <source>Port:</source>
        <translation>Porta:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3045"/>
        <source>IP:</source>
        <translation>IP:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3055"/>
        <source>Protocol:</source>
        <translation>Protocollo:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3065"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="259"/>
        <source>Double click action:</source>
        <translation>Azione doppio click del mouse:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="359"/>
        <source>Separate user folders</source>
        <translation>Separa cartelle utente</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="396"/>
        <source>Box Structure</source>
        <translation>Struttura area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="338"/>
        <source>Use volume serial numbers for drives, like: \drive\C~1234-ABCD</source>
        <translation>Usa i numeri di serie dei volumi per le unità, come: \drive\C~1234-ABCD</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="382"/>
        <source>The box structure can only be changed when the sandbox is empty</source>
        <translation>La struttura dell&apos;area virtuale può essere modificata solo quando questa è vuota</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="352"/>
        <source>Disk/File access</source>
        <translation>Accesso al disco/file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="331"/>
        <source>Virtualization scheme</source>
        <translation>Schema di virtualizzazione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="481"/>
        <source>2113: Content of migrated file was discarded
2114: File was not migrated, write access to file was denied
2115: File was not migrated, file will be opened read only</source>
        <translation>2113: Il contenuto del file migrato è stato scartato
2114: Il file non è stato migrato, l&apos;accesso in scrittura al file è stato negato
2115: Il file non è stato migrato, quindi verrà aperto in sola lettura</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="486"/>
        <source>Issue message 2113/2114/2115 when a file is not fully migrated</source>
        <translation>Mostra messaggio 2113/2114/2115 quando un file non è completamente migrato</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="510"/>
        <source>Add Pattern</source>
        <translation>Aggiungi modello</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="517"/>
        <source>Remove Pattern</source>
        <translation>Rimuovi modello</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="571"/>
        <source>Pattern</source>
        <translation>Modello</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="579"/>
        <source>Sandboxie does not allow writing to host files, unless permitted by the user. When a sandboxed application attempts to modify a file, the entire file must be copied into the sandbox, for large files this can take a significate amount of time. Sandboxie offers options for handling these cases, which can be configured on this page.</source>
        <translation>Sandboxie non consente di scrivere sui file host, a meno che non sia consentito dall&apos;utente. Quando un&apos;applicazione avviata nell&apos;area virtuale tenta di modificare un file, l&apos;intero file deve essere copiato nell&apos;area virtuale. Per i file di grandi dimensioni, questa operazione può richiedere un tempo significativo. Per questo motivo, Sandboxie fornisce varie opzioni che possono essere configurate per gestire questi casi.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="589"/>
        <source>Using wildcard patterns file specific behavior can be configured in the list below:</source>
        <translation>Utilizzando i modelli di caratteri jolly, è possibile configurare un comportamento specifico per i file nell&apos;elenco seguente:</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="603"/>
        <source>When a file cannot be migrated, open it in read-only mode instead</source>
        <translation>Quando un file non può essere migrato, aprirlo in modalità di sola lettura</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="874"/>
        <source>Icon</source>
        <translation>Icona</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="899"/>
        <source>Move Up</source>
        <translation>Sposta in alto</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="918"/>
        <source>Move Down</source>
        <translation>Sposta in basso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="953"/>
        <source>Security Options</source>
        <translation>Opzioni di sicurezza</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="963"/>
        <source>Security Hardening</source>
        <translation>Restrizioni di sicurezza</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1153"/>
        <source>Security Isolation</source>
        <translation>Isolamento di sicurezza</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1174"/>
        <source>Various isolation features can break compatibility with some applications. If you are using this sandbox &lt;b&gt;NOT for Security&lt;/b&gt; but for application portability, by changing these options you can restore compatibility by sacrificing some security.</source>
        <translation>Diverse funzioni di isolamento possono interrompere la compatibilità con alcune applicazioni. Nel caso in cui si preferisce &lt;b&gt;NON&lt;/b&gt; utilizzare quest&apos;area virtuale &lt;b&gt;in modo sicuro&lt;/b&gt; a favore della portabilità delle applicazioni, è possibile ripristinare la compatibilità abbassando le misure di sicurezza.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1272"/>
        <source>Access Isolation</source>
        <translation>Isolamento degli accessi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1299"/>
        <location filename="Forms/OptionsWindow.ui" line="1357"/>
        <source>Image Protection</source>
        <translation>Protezione immagine</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1307"/>
        <source>Issue message 1305 when a program tries to load a sandboxed dll</source>
        <translation>Mostra messaggio 1305 quando un programma tenta di caricare un file DLL nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1340"/>
        <source>Prevent sandboxes programs installed on host from loading dll&apos;s from the sandbox</source>
        <translation>Impedisci ai programmi in esecuzione nell&apos;area virtuale (installati sul sistema host) di caricare file DLL</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1383"/>
        <source>Sandboxie’s resource access rules often discriminate against program binaries located inside the sandbox. OpenFilePath and OpenKeyPath work only for application binaries located on the host natively. In order to define a rule without this restriction, OpenPipePath or OpenConfPath must be used. Likewise, all Closed(File|Key|Ipc)Path directives which are defined by negation e.g. ‘ClosedFilePath=! iexplore.exe,C:Users*’ will be always closed for binaries located inside a sandbox. Both restriction policies can be disabled on the “Access policies” page.
This is done to prevent rogue processes inside the sandbox from creating a renamed copy of themselves and accessing protected resources. Another exploit vector is the injection of a library into an authorized process to get access to everything it is allowed to access. Using Host Image Protection, this can be prevented by blocking applications (installed on the host) running inside a sandbox from loading libraries from the sandbox itself.</source>
        <translation>Le regole di accesso alle risorse di Sandboxie spesso discriminano i programmi eseguibili all&apos;interno dell&apos;area virtuale. OpenFilePath e OpenKeyPath funzionano solo per gli eseguibili delle applicazioni situati sull&apos;host in modo nativo. Per definire una regola senza questa restrizione, è necessario utilizzare OpenPipePath o OpenConfPath. Allo stesso modo, tutte le regole Closed(File|Key|Ipc)Path che sono definite per negazione, ad esempio ‘ClosedFilePath=!iexplore.exe,C:\Users*’ saranno sempre chiuse per gli eseguibili situati all&apos;interno dell&apos;area virtuale. Entrambi i criteri di restrizione possono essere disattivati dalla pagina “Criteri di accesso”.
In questo modo si impedisce che i processi dannosi all&apos;interno dell&apos;area virtuale creino una copia rinominata di se stessi e accedano alle risorse protette. Un altro vettore di exploit è l&apos;iniezione di una libreria DLL in un processo autorizzato per ottenere l&apos;accesso a tutto ciò a cui è consentito accedere. Utilizzando la protezione dell&apos;immagine host, questo può essere evitato impedendo alle applicazioni (installate sull&apos;host) in esecuzione nell&apos;area virtuale di caricare le librerie DLL dalla stessa area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1404"/>
        <source>Advanced Security</source>
        <translation>Sicurezza avanzata</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1412"/>
        <source>Use a Sandboxie login instead of an anonymous token (experimental)</source>
        <translation>Usa autenticazione di Sandboxie invece di un token anonimo (sperimentale)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1429"/>
        <source>Other isolation</source>
        <translation>Isolamento aggiuntivo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1453"/>
        <source>Privilege isolation</source>
        <translation>Isolamento dei privilegi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1477"/>
        <source>Sandboxie token</source>
        <translation>Token di Sandboxie</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1566"/>
        <source>Using a custom Sandboxie Token allows to isolate individual sandboxes from each other better, and it shows in the user column of task managers the name of the box a process belongs to. Some 3rd party security solutions may however have problems with custom tokens.</source>
        <translation>L&apos;uso di un token di Sandboxie personalizzato consente di isolare meglio le singole aree virtuali e di mostrare nella colonna utente del task manager il nome dell&apos;area virtuale a cui appartiene un processo. Alcune soluzioni di sicurezza di terze parti potrebbero tuttavia avere problemi con i token personalizzati.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1657"/>
        <source>Program Control</source>
        <translation>Controllo programmi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1679"/>
        <source>Force Programs</source>
        <translation>Forzatura programmi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1791"/>
        <source>Disable forced Process and Folder for this sandbox</source>
        <translation>Disattiva la forzatura di processi e cartelle per quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1801"/>
        <source>Breakout Programs</source>
        <translation>Esclusione programmi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1870"/>
        <source>Breakout Program</source>
        <translation>Escludi programma</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1896"/>
        <source>Breakout Folder</source>
        <translation>Escludi cartella</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1903"/>
        <source>Programs entered here will be allowed to break out of this sandbox when they start. It is also possible to capture them into another sandbox, for example to have your web browser always open in a dedicated box.</source>
        <translation>I programmi inseriti qui potranno uscire da questa area virtuale al momento del loro avvio. È anche possibile forzarli in un&apos;altra area virtuale, ad esempio per avere il browser Web sempre aperto in una area virtuale dedicata.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1930"/>
        <source>Lingering Programs</source>
        <translation>Programmi secondari</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1996"/>
        <source>Lingering programs will be automatically terminated if they are still running after all other processes have been terminated.</source>
        <translation>I processi secondari verranno chiusi automaticamente qualora siano ancora in esecuzione, dopo aver terminato tutti gli altri processi.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2009"/>
        <source>Leader Programs</source>
        <translation>Programmi principali</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2075"/>
        <source>If leader processes are defined, all others are treated as lingering processes.</source>
        <translation>Una volta impostati i processi principali, tutti gli altri verranno trattati come processi secondari.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2204"/>
        <source>Files</source>
        <translation>File</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2297"/>
        <source>Configure which processes can access Files, Folders and Pipes. 
&apos;Open&apos; access only applies to program binaries located outside the sandbox, you can use &apos;Open for All&apos; instead to make it apply to all programs, or change this behavior in the Policies tab.</source>
        <translation>Configura i processi che possono accedere a file, cartelle e pipe. 
L&apos;accesso &apos;Consenti&apos; su file e chiavi di registro si applica solo ai programmi eseguibili presenti all&apos;esterno dell&apos;area virtuale. È possibile utilizzare l&apos;accesso &apos;Consenti tutto&apos; per estenderlo a tutti i programmi o modificare questo aspetto nella scheda Criteri.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2311"/>
        <source>Registry</source>
        <translation>Registro</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2404"/>
        <source>Configure which processes can access the Registry. 
&apos;Open&apos; access only applies to program binaries located outside the sandbox, you can use &apos;Open for All&apos; instead to make it apply to all programs, or change this behavior in the Policies tab.</source>
        <translation>Configura i processi che possono accedere al Registro di sistema. 
L&apos;accesso &apos;Consenti&apos; su file e chiavi di registro si applica solo ai programmi eseguibili presenti all&apos;esterno dell&apos;area virtuale. È possibile utilizzare l&apos;accesso &apos;Consenti tutto&apos; per estenderlo a tutti i programmi o modificare questo aspetto nella scheda Criteri.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2418"/>
        <source>IPC</source>
        <translation>IPC</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2511"/>
        <source>Configure which processes can access NT IPC objects like ALPC ports and other processes memory and context.
To specify a process use &apos;$:program.exe&apos; as path.</source>
        <translation>Configura quali processi possono accedere agli oggetti NT IPC, come le porte ALPC, il contesto e la memoria dei processi.
Per specificare un processo, utilizza &apos;$:program.exe&apos; come percorso.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2525"/>
        <source>Wnd</source>
        <translation>Finestre</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2610"/>
        <source>Wnd Class</source>
        <translation>Classe finestra</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2625"/>
        <source>Configure which processes can access desktop objects like windows and alike.</source>
        <translation>Configurare i processi che possono accedere agli oggetti del desktop, come finestre e simili.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2638"/>
        <source>COM</source>
        <translation>COM</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2684"/>
        <source>Class Id</source>
        <translation>Id classe</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2731"/>
        <source>Configure which processes can access COM objects.</source>
        <translation>Configura i processi che possono accedere agli oggetti COM.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2743"/>
        <source>Don&apos;t use virtualized COM, Open access to hosts COM infrastructure (not recommended)</source>
        <translation>Non utilizzare COM virtualizzato, consenti accesso all&apos;infrastruttura COM degli host (non raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2751"/>
        <source>Access Policies</source>
        <translation>Criteri di accesso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2785"/>
        <source>Apply Close...=!&lt;program&gt;,... rules also to all binaries located in the sandbox.</source>
        <translation>Estendi le regole Close...=!&lt;program&gt;,... anche a tutti i programmi eseguibili presenti nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2881"/>
        <source>Network Options</source>
        <translation>Opzioni di rete</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3081"/>
        <source>Add Rule</source>
        <translation>Aggiungi regola</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="561"/>
        <location filename="Forms/OptionsWindow.ui" line="3097"/>
        <location filename="Forms/OptionsWindow.ui" line="3536"/>
        <location filename="Forms/OptionsWindow.ui" line="3861"/>
        <source>Action</source>
        <translation>Azione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3102"/>
        <source>Port</source>
        <translation>Porta</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3107"/>
        <source>IP</source>
        <translation>IP</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3112"/>
        <source>Protocol</source>
        <translation>Protocollo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3134"/>
        <source>CAUTION: Windows Filtering Platform is not enabled with the driver, therefore these rules will be applied only in user mode and can not be enforced!!! This means that malicious applications may bypass them.</source>
        <translation>ATTENZIONE: La piattaforma di filtraggio di Windows non è attiva come impostazione predefinita. Qualora non venisse attivata manualmente, queste regole verranno applicate solo in user mode e le applicazioni dannose potrebbero bypassarle.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3161"/>
        <source>Quick Recovery</source>
        <translation>Recupero veloce</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3240"/>
        <source>Immediate Recovery</source>
        <translation>Recupero immediato</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3337"/>
        <source>Various Options</source>
        <translation>Opzioni varie</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3431"/>
        <source>Allow use of nested job objects (works on Windows 8 and later)</source>
        <translation>Consenti l&apos;uso dei processi nidificati (per Windows 8 e versioni successive)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1204"/>
        <source>Open access to Windows Security Account Manager</source>
        <translation>Consenti accesso al sistema di gestione degli account di sicurezza (SAM)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1238"/>
        <source>Open access to Windows Local Security Authority</source>
        <translation>Consenti accesso al sottosistema dell&apos;autorità di protezione locale (LSASS)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2833"/>
        <source>The rule specificity is a measure to how well a given rule matches a particular path, simply put the specificity is the length of characters from the begin of the path up to and including the last matching non-wildcard substring. A rule which matches only file types like &quot;*.tmp&quot; would have the highest specificity as it would always match the entire file path.
The process match level has a higher priority than the specificity and describes how a rule applies to a given process. Rules applying by process name or group have the strongest match level, followed by the match by negation (i.e. rules applying to all processes but the given one), while the lowest match levels have global matches, i.e. rules that apply to any process.</source>
        <translation>La specificità delle regole è una misura di quanto una determinata regola corrisponda a un particolare percorso, in poche parole la specificità è la lunghezza dei caratteri dall&apos;inizio del percorso fino all&apos;ultima sottostringa senza caratteri jolly. Una regola che corrisponde solo ai tipi di file come &quot;*.tmp&quot; avrebbe la più alta specificità in quanto corrisponderebbe sempre all&apos;intero percorso del file.
Il livello di corrispondenza del processo ha una priorità più alta della specificità, e descrive come una regola si applica a un determinato processo. Le regole che si applicano per nome di processo o gruppo hanno il livello di corrispondenza più forte, seguito dalla corrispondenza per negazione (ovvero regole che si applicano a tutti i processi tranne quello specificato), mentre i livelli di corrispondenza più bassi hanno corrispondenze globali, ovvero regole che si applicano a qualsiasi processo.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2792"/>
        <source>Prioritize rules based on their Specificity and Process Match Level</source>
        <translation>Assegna priorità alle regole in base alla loro specificità e al livello di corrispondenza del processo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2844"/>
        <source>Privacy Mode, block file and registry access to all locations except the generic system ones</source>
        <translation>Modalità Privacy, blocca l&apos;accesso ai file e al registro per tutti i percorsi eccetto quelli di sistema</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2826"/>
        <source>Access Mode</source>
        <translation>Modalità di accesso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2864"/>
        <source>When the Privacy Mode is enabled, sandboxed processes will be only able to read C:\Windows\*, C:\Program Files\*, and parts of the HKLM registry, all other locations will need explicit access to be readable and/or writable. In this mode, Rule Specificity is always enabled.</source>
        <translation>Quando la Modalità Privacy è attiva, i processi nell&apos;area virtuale potranno soltanto leggere C:\Windows\*, C:\Program Files\* e parte del registro HKLM, mentre tutti gli altri percorsi avranno bisogno di un accesso esplicito per consentire la lettura e/o scrittura. In questa modalità, l&apos;opzione di specificità rimane sempre attiva.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2778"/>
        <source>Rule Policies</source>
        <translation>Criteri regole</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2799"/>
        <source>Apply File and Key Open directives only to binaries located outside the sandbox.</source>
        <translation>Applica le regole di accesso &apos;Consenti&apos; soltanto ai programmi eseguibili presenti all&apos;esterno dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1436"/>
        <source>Start the sandboxed RpcSs as a SYSTEM process (not recommended)</source>
        <translation>Avvia il servizio RpcSs come processo di sistema nell&apos;area virtuale (non raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1559"/>
        <source>Add sandboxed processes to job objects (recommended)</source>
        <translation>Aggiungi processi in esecuzione nell&apos;area virtuale agli oggetti Job (raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1498"/>
        <source>Drop critical privileges from processes running with a SYSTEM token</source>
        <translation>Rimuovi i privilegi critici dai processi avviati con un token di sistema</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1491"/>
        <location filename="Forms/OptionsWindow.ui" line="1539"/>
        <source>(Security Critical)</source>
        <translation>(opzione di sicurezza)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1460"/>
        <source>Protect sandboxed SYSTEM processes from unprivileged processes</source>
        <translation>Proteggi i processi di sistema nell&apos;area virtuale dai processi senza privilegi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3451"/>
        <source>Disable the use of RpcMgmtSetComTimeout by default (this may resolve compatibility issues)</source>
        <translation>Disattiva l&apos;utilizzo di RpcMgmtSetComTimeout per impostazione predefinita (potrebbe risolvere problemi di compatibilità)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1228"/>
        <source>Security Isolation through the usage of a heavily restricted process token is Sandboxie&apos;s primary means of enforcing sandbox restrictions, when this is disabled the box is operated in the application compartment mode, i.e. it’s no longer providing reliable security, just simple application compartmentalization.</source>
        <translation>L&apos;isolamento di sicurezza che consiste nell&apos;uso di un token di processo fortemente limitato è il metodo principale di Sandboxie di applicare restrizioni all&apos;area virtuale. Quando questa opzione è disattivata, l&apos;area virtuale viene gestita dalla modalità di compartimento delle applicazioni, in cui viene fornito un semplice compartimento delle applicazioni senza le normali misure di sicurezza.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1197"/>
        <source>Disable Security Isolation (experimental)</source>
        <translation>Disattiva isolamento di sicurezza (sperimentale)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1255"/>
        <source>Security Isolation &amp; Filtering</source>
        <translation>Isolamento e filtraggio</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1211"/>
        <source>Disable Security Filtering (not recommended)</source>
        <translation>Disattiva filtraggio di sicurezza (non raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1218"/>
        <source>Security Filtering used by Sandboxie to enforce filesystem and registry access restrictions, as well as to restrict process access.</source>
        <translation>Il filtraggio di sicurezza viene usato da Sandboxie per applicare le restrizioni di accesso al file system e al registro, e per limitare l&apos;accesso ai processi.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1286"/>
        <source>The below options can be used safely when you don&apos;t grant admin rights.</source>
        <translation>Le opzioni sottostanti possono essere usate senza rischi quando non si concedono privilegi amministrativi.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3718"/>
        <source>Hide Processes</source>
        <translation>Nascondi processi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3767"/>
        <location filename="Forms/OptionsWindow.ui" line="3825"/>
        <source>Add Process</source>
        <translation>Aggiungi processo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3743"/>
        <source>Hide host processes from processes running in the sandbox.</source>
        <translation>Nascondi i processi di host dai processi in esecuzione nell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3774"/>
        <source>Don&apos;t allow sandboxed processes to see processes running in other boxes</source>
        <translation>Non consentire ai processi dell&apos;area virtuale di vedere i processi avviati in altre aree virtuali</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3882"/>
        <source>Users</source>
        <translation>Utenti</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3900"/>
        <source>Restrict Resource Access monitor to administrators only</source>
        <translation>Limita il log di accesso risorse ai soli amministratori</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3907"/>
        <source>Add User</source>
        <translation>Aggiungi utente</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3937"/>
        <source>Add user accounts and user groups to the list below to limit use of the sandbox to only those accounts.  If the list is empty, the sandbox can be used by all user accounts.

Note:  Forced Programs and Force Folders settings for a sandbox do not apply to user accounts which cannot use the sandbox.</source>
        <translation>Aggiungere gli account utente e i gruppi utente al seguente elenco per limitare l&apos;utilizzo dell&apos;area virtuale solo a tali account. Se l&apos;elenco è vuoto, l&apos;area virtuale potrà essere utilizzata da tutti gli account utente.

Nota: le impostazioni dei programmi e delle cartelle forzate nell&apos;area virtuale non si applicano agli account utente non abilitati all&apos;utilizzo dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4048"/>
        <source>Tracing</source>
        <translation>Tracing</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4219"/>
        <source>COM Class Trace</source>
        <translation>Traccia classe COM</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4164"/>
        <source>IPC Trace</source>
        <translation>Traccia IPC</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4226"/>
        <source>Key Trace</source>
        <translation>Traccia chiavi di registro</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4171"/>
        <source>GUI Trace</source>
        <translation>Traccia GUI</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4056"/>
        <source>API call trace (requires LogAPI to be installed in the Sbie directory)</source>
        <translation>Traccia chiamata API (richiede l&apos;installazione di LogAPI nella cartella di Sandboxie Plus)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4096"/>
        <source>Log all SetError&apos;s to Trace log (creates a lot of output)</source>
        <translation>Registra tutti i SetError nel log di accesso (genera molto output)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4150"/>
        <source>File Trace</source>
        <translation>Traccia file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4076"/>
        <source>Pipe Trace</source>
        <translation>Traccia pipe</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4212"/>
        <source>Access Tracing</source>
        <translation>Log di accesso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4116"/>
        <source>Log Debug Output to the Trace Log</source>
        <translation>Registra output di debug nel log di accesso</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="89"/>
        <source>Always show this sandbox in the systray list (Pinned)</source>
        <translation>Mostra sempre quest&apos;area virtuale nell&apos;area di notifica (in rilievo)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1040"/>
        <source>Security enhancements</source>
        <translation>Miglioramenti di sicurezza</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="971"/>
        <source>Use the original token only for approved NT system calls</source>
        <translation>Usa il token originale solo per le chiamate di sistema NT approvate</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="1023"/>
        <source>Restrict driver/device access to only approved ones</source>
        <translation>Limita accesso ai soli driver/dispositivi approvati</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="978"/>
        <source>Enable all security enhancements (make security hardened box)</source>
        <translation>Attiva tutti i miglioramenti di sicurezza (crea area virtuale ristretta)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="668"/>
        <source>Allow to read memory of unsandboxed processes (not recommended)</source>
        <translation>Consenti di leggere la memoria dei processi all&apos;esterno dell&apos;area virtuale (non raccomandato)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="716"/>
        <source>Issue message 2111 when a process access is denied</source>
        <translation>Mostra messaggio 2111 quando è negato l&apos;accesso a un processo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3468"/>
        <source>Triggers</source>
        <translation>Attivazioni</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3531"/>
        <source>Event</source>
        <translation>Evento</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3501"/>
        <location filename="Forms/OptionsWindow.ui" line="3520"/>
        <location filename="Forms/OptionsWindow.ui" line="3658"/>
        <source>Run Command</source>
        <translation>Avvia comando</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3690"/>
        <source>Start Service</source>
        <translation>Avvia servizio</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3665"/>
        <source>These events are executed each time a box is started</source>
        <translation>Questi eventi vengono eseguiti a ogni avvio di un&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3668"/>
        <source>On Box Start</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo per ragioni di lunghezza</translatorcomment>
        <translation>All&apos;avvio&lt;br /&gt;dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3549"/>
        <location filename="Forms/OptionsWindow.ui" line="3697"/>
        <source>These commands are run UNBOXED just before the box content is deleted</source>
        <translation>Questi comandi vengono eseguiti FUORI dall&apos;area virtuale poco prima dell&apos;eliminazione del contenuto</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3623"/>
        <source>These commands are executed only when a box is initialized. To make them run again, the box content must be deleted.</source>
        <translation>Questi comandi vengono eseguiti solamente all&apos;inizializzazione di un&apos;area virtuale. Per eseguirli nuovamente, il contenuto dell&apos;area virtuale dovrà essere rimosso.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3626"/>
        <source>On Box Init</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo per ragioni di lunghezza</translatorcomment>
        <translation>All&apos;inizializzazione&lt;br /&gt;dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3636"/>
        <source>Here you can specify actions to be executed automatically on various box events.</source>
        <translation>È possibile specificare una lista di azioni che verranno eseguite automaticamente in base agli eventi dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4123"/>
        <source>Log all access events as seen by the driver to the resource access log.

This options set the event mask to &quot;*&quot; - All access events
You can customize the logging using the ini by specifying
&quot;A&quot; - Allowed accesses
&quot;D&quot; - Denied accesses
&quot;I&quot; - Ignore access requests
instead of &quot;*&quot;.</source>
        <translation>Registra tutti gli eventi di accesso visti dal driver nel log di accesso.

Queste opzioni impostano la maschera degli eventi a &quot;*&quot; - tutti gli eventi di accesso
È possibile personalizzare la registrazione specificando nel file Sandboxie.ini:
&quot;A&quot; - Accessi consentiti
&quot;D&quot; - Accessi negati
&quot;I&quot;  - Ignora richieste di accesso al posto di &quot;*&quot;.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4143"/>
        <source>Ntdll syscall Trace (creates a lot of output)</source>
        <translation>Traccia chiamata di sistema Ntdll (genera molto output)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4157"/>
        <source>Disable Resource Access Monitor</source>
        <translation>Disattiva monitor di accesso risorse per quest&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4185"/>
        <source>Resource Access Monitor</source>
        <translation>Monitor accesso risorse</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="2993"/>
        <location filename="Forms/OptionsWindow.ui" line="4233"/>
        <source>Network Firewall</source>
        <translation>Firewall di rete</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4250"/>
        <source>Debug</source>
        <translation>Debug</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4306"/>
        <source>WARNING, these options can disable core security guarantees and break sandbox security!!!</source>
        <translation>ATTENZIONE! Queste opzioni possono disattivare le misure di sicurezza e compromettere la sicurezza dell&apos;area virtuale!!!</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4316"/>
        <source>These options are intended for debugging compatibility issues, please do not use them in production use. </source>
        <translation>Queste opzioni sono destinate al debug dei problemi di compatibilità, si prega di utilizzarle solo per scopi di test. </translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4331"/>
        <source>App Templates</source>
        <translation>Modelli applicazioni</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4416"/>
        <source>Filter Categories</source>
        <translation>Filtra categorie</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4387"/>
        <source>Text Filter</source>
        <translation>Cerca</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4409"/>
        <source>Add Template</source>
        <translation>Aggiungi modello</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4433"/>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4364"/>
        <source>This list contains a large amount of sandbox compatibility enhancing templates</source>
        <translation>Questo elenco contiene un gran numero di modelli di compatibilità software</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4468"/>
        <source>Template Folders</source>
        <translation>Percorsi modelli</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4488"/>
        <source>Configure the folder locations used by your other applications.

Please note that this values are currently user specific and saved globally for all boxes.</source>
        <translation>Configura i percorsi utilizzati dalle altre applicazioni.

I seguenti valori sono specifici per l&apos;utente e salvati a livello globale per tutte le aree virtuali.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4017"/>
        <location filename="Forms/OptionsWindow.ui" line="4519"/>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4530"/>
        <source>Accessibility</source>
        <translation>Accessibilità</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4626"/>
        <source>To compensate for the lost protection, please consult the Drop Rights settings page in the Restrictions settings group.</source>
        <translation>Per compensare alla disabilitazione delle misure di protezione, consultare la pagina Limitazione dei diritti, nel gruppo Restrizioni.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4550"/>
        <source>Screen Readers: JAWS, NVDA, Window-Eyes, System Access</source>
        <translation>Screen reader: JAWS, NVDA, Window-Eyes, System Access</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="613"/>
        <source>Restrictions</source>
        <translation>Restrizioni</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3396"/>
        <source>Apply ElevateCreateProcess Workaround (legacy behaviour)</source>
        <translation>Applica il workaround ElevateCreateProcess (legacy)</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3458"/>
        <source>Use desktop object workaround for all processes</source>
        <translation>Usa il workaround dell&apos;oggetto desktop per tutti i processi</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3498"/>
        <source>This command will be run before the box content will be deleted</source>
        <translation>Questo comando verrà eseguito prima che il contenuto dell&apos;area virtuale venga eliminato</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3552"/>
        <source>On File Recovery</source>
        <translation>Al recupero dei file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3581"/>
        <source>This command will be run before a file is being recovered and the file path will be passed as the first argument. If this command returns anything other than 0, the recovery will be blocked</source>
        <translation>Questo comando verrà eseguito prima del recupero di un file e il percorso del file passato come primo argomento. Se questo comando restituisce qualcosa di diverso da 0, il recupero viene bloccato</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3584"/>
        <source>Run File Checker</source>
        <translation>Avvia controllo dei file</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3700"/>
        <source>On Delete Content</source>
        <translation>Alla rimozione del&lt;br /&gt;contenuto</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3781"/>
        <source>Protect processes in this box from being accessed by specified unsandboxed host processes.</source>
        <translation>Proteggi i processi dell&apos;area virtuale dall&apos;accesso dei processi host.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3792"/>
        <location filename="Forms/OptionsWindow.ui" line="3856"/>
        <source>Process</source>
        <translation>Processo</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3832"/>
        <source>Block also read access to processes in this sandbox</source>
        <translation>Blocca anche l&apos;accesso in lettura ai processi in questa area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3982"/>
        <source>Add Option</source>
        <translation>Aggiungi opzione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="3996"/>
        <source>Here you can configure advanced per process options to improve compatibility and/or customize sandboxing behavior.</source>
        <translation>Qui è possibile configurare opzioni avanzate per processo al fine di migliorare la compatibilità e/o personalizzare il comportamento dell&apos;area virtuale.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4007"/>
        <source>Option</source>
        <translation>Opzione</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4341"/>
        <source>Templates</source>
        <translation>Modelli</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4590"/>
        <source>The following settings enable the use of Sandboxie in combination with accessibility software.  Please note that some measure of Sandboxie protection is necessarily lost when these settings are in effect.</source>
        <translation>Le seguenti impostazioni consentono di usare Sandboxie in combinazione con i programmi per l&apos;accesso facilitato. Tuttavia, alcune misure di protezione di Sandboxie vengono disabilitate quando queste impostazioni sono attive.</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4643"/>
        <source>Edit ini Section</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo</translatorcomment>
        <translation>Modifica configurazione
area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4649"/>
        <source>Edit ini</source>
        <translation>Modifica Sandboxie.ini</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4662"/>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
    <message>
        <location filename="Forms/OptionsWindow.ui" line="4685"/>
        <source>Save</source>
        <translation>Salva</translation>
    </message>
</context>
<context>
    <name>PopUpWindow</name>
    <message>
        <location filename="Forms/PopUpWindow.ui" line="32"/>
        <source>SandboxiePlus Notifications</source>
        <translation>Sandboxie Plus - Notifiche</translation>
    </message>
</context>
<context>
    <name>ProgramsDelegate</name>
    <message>
        <location filename="Windows/OptionsWindow.cpp" line="55"/>
        <source>Group: %1</source>
        <translation>Gruppo: %1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="Views/SbieView.cpp" line="1425"/>
        <source>Drive %1</source>
        <translation>Unità %1</translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="SandMan.cpp" line="3355"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3356"/>
        <source>Apply</source>
        <translation>Applica</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3357"/>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3358"/>
        <source>&amp;Yes</source>
        <translation>&amp;Sì</translation>
    </message>
    <message>
        <location filename="SandMan.cpp" line="3359"/>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
</context>
<context>
    <name>RecoveryWindow</name>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="32"/>
        <source>SandboxiePlus - Recovery</source>
        <translation>Sandboxie Plus - Recupero</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="164"/>
        <source>Close</source>
        <translation>Chiudi</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="68"/>
        <source>Recover target:</source>
        <translation>Destinazione:</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="42"/>
        <source>Add Folder</source>
        <translation>Aggiungi cartella</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="61"/>
        <source>Delete Content</source>
        <translation>Elimina contenuto</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="110"/>
        <source>Recover</source>
        <translation>Recupera</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="78"/>
        <source>Refresh</source>
        <translation>Aggiorna</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="142"/>
        <source>Delete</source>
        <translation>Elimina</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="171"/>
        <source>Show All Files</source>
        <translation>Mostra tutti i file</translation>
    </message>
    <message>
        <location filename="Forms/RecoveryWindow.ui" line="184"/>
        <source>TextLabel</source>
        <translation>Etichetta di testo</translation>
    </message>
</context>
<context>
    <name>SelectBoxWindow</name>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="32"/>
        <source>SandboxiePlus select box</source>
        <translation>Sandboxie Plus - Seleziona area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="87"/>
        <source>Select the sandbox in which to start the program, installer or document.</source>
        <translation>Selezionare l&apos;area virtuale in cui avviare il programma o aprire il documento.</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="97"/>
        <source>Run in a new Sandbox</source>
        <translation>Avvia in una nuova area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="65"/>
        <source>Sandbox</source>
        <translation>Elenco aree virtuali</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="80"/>
        <source>Run As UAC Administrator</source>
        <translation>Esegui come amministratore</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="47"/>
        <source>Run Sandboxed</source>
        <translation>Avvia nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SelectBoxWindow.ui" line="73"/>
        <source>Run Outside the Sandbox</source>
        <translation>Avvia all&apos;esterno dell&apos;area virtuale</translation>
    </message>
</context>
<context>
    <name>SettingsWindow</name>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="32"/>
        <source>SandboxiePlus Settings</source>
        <translation>Sandboxie Plus - Impostazioni</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="55"/>
        <source>General Config</source>
        <translation>Configurazione generale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="479"/>
        <source>Systray options</source>
        <translation>Opzioni area di notifica</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="195"/>
        <source>Open urls from this ui sandboxed</source>
        <translation>Apri gli URL di questo programma nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1148"/>
        <source>This supporter certificate has expired, please &lt;a href=&quot;sbie://update/cert&quot;&gt;get an updated certificate&lt;/a&gt;.</source>
        <translation>Questo certificato è scaduto, si prega di &lt;a href=&quot;sbie://update/cert&quot;&gt;ottenere un certificato aggiornato&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1185"/>
        <source>The preview channel contains the latest GitHub pre-releases.</source>
        <translation>Il canale di anteprima contiene le ultime versioni di anteprima pubblicate su GitHub.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1171"/>
        <source>Enter the support certificate here</source>
        <translation>Inserire il certificato di supporto</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1255"/>
        <source>Support Settings</source>
        <translation>Impostazioni di supporto</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1198"/>
        <source>New Versions</source>
        <translation>Nuove versioni</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1205"/>
        <source>The stable channel contains the latest stable GitHub releases.</source>
        <translation>Il canale stabile contiene le ultime versioni stabili pubblicate su GitHub.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1208"/>
        <source>Search in the Stable channel</source>
        <translation>Cerca nel canale stabile</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1308"/>
        <source>Keeping Sandboxie up to date with the rolling releases of Windows and compatible with all web browsers is a never-ending endeavor. Please consider supporting this work with a donation.&lt;br /&gt;You can support the development with a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;PayPal donation&lt;/a&gt;, working also with credit cards.&lt;br /&gt;Or you can provide continuous support with a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;Patreon subscription&lt;/a&gt;.</source>
        <translation>Mantenere Sandboxie aggiornato con i rilasci continui di Windows e garantire la compatibilità con i browser moderni è uno sforzo senza fine. Si prega di supportare questo lavoro con una donazione.&lt;br /&gt;È possibile supportare lo sviluppo con una &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-cert&quot;&gt;donazione PayPal&lt;/a&gt;, che consente anche la donazione tramite carta di credito. Inoltre, è possibile fornire un supporto costante con un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=patreon&quot;&gt;abbonamento Patreon&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1188"/>
        <source>Search in the Preview channel</source>
        <translation>Cerca nel canale di anteprima</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1215"/>
        <source>Supporters of the Sandboxie-Plus project can receive a &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;supporter certificate&lt;/a&gt;. It&apos;s like a license key but for awesome people using open source software. :-)</source>
        <translation>I sostenitori del progetto Sandboxie Plus riceveranno un &lt;a href=&quot;https://sandboxie-plus.com/go.php?to=sbie-get-cert&quot;&gt;certificato di sostenitore&lt;/a&gt;. È come un codice di licenza, ma dedicato alle persone straordinarie che utilizzano software open source. :-)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1228"/>
        <source>Check periodically for updates of Sandboxie-Plus</source>
        <translation>Controlla periodicamente gli aggiornamenti di Sandboxie Plus</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="613"/>
        <source>Start UI with Windows</source>
        <translation>Esegui Sandboxie Plus all&apos;avvio di Windows</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="521"/>
        <source>Add &apos;Run Sandboxed&apos; to the explorer context menu</source>
        <translation>Aggiungi l&apos;opzione «Avvia nell&apos;area virtuale» al menu contestuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="620"/>
        <source>Start UI when a sandboxed process is started</source>
        <translation>Esegui Sandboxie Plus all&apos;avvio di un programma nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="80"/>
        <source>Show file recovery window when emptying sandboxes</source>
        <translation>Mostra la finestra di recupero file prima di svuotare le aree virtuali</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1589"/>
        <source>Config protection</source>
        <translation>Blocco della configurazione</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1475"/>
        <source>Sandbox &lt;a href=&quot;sbie://docs/ipcrootpath&quot;&gt;ipc root&lt;/a&gt;: </source>
        <translation>&lt;a href=&quot;sbie://docs/ipcrootpath&quot;&gt;Percorso IPC&lt;/a&gt; dell&apos;area virtuale: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="185"/>
        <source>UI Language:</source>
        <translation>Lingua:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="73"/>
        <source>Count and display the disk space occupied by each sandbox</source>
        <translation>Calcola e mostra lo spazio su disco occupato da ogni area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="94"/>
        <source>SandMan Options</source>
        <translation>Opzioni SandMan</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="144"/>
        <source>Show the Recovery Window as Always on Top</source>
        <translation>Mostra la finestra di recupero sempre in primo piano</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="208"/>
        <source>Notifications</source>
        <translation>Notifiche</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="240"/>
        <source>Add Entry</source>
        <translation>Aggiungi voce</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="247"/>
        <source>Show file migration progress when copying large files into a sandbox</source>
        <translation>Mostra l&apos;avanzamento della migrazione dei file quando si copiano file di grandi dimensioni in un&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="255"/>
        <source>Message ID</source>
        <translation>ID messaggio</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="260"/>
        <source>Message Text (optional)</source>
        <translation>Testo messaggio (opzionale)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="275"/>
        <source>SBIE Messages</source>
        <translation>Messaggi di Sandboxie</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="301"/>
        <source>Delete Entry</source>
        <translation>Elimina voce</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="308"/>
        <source>Don&apos;t show the popup message log for all SBIE messages</source>
        <translation>Nascondi le notifiche popup per tutti i messaggi di Sandboxie</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="325"/>
        <source>Notification Options</source>
        <translation>Opzioni di notifica</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="361"/>
        <source>Sandboxie may be issue &lt;a href= &quot;sbie://docs/ sbiemessages&quot;&gt;SBIE Messages&lt;/a&gt; to the Message Log and shown them as Popups. Some messages are informational and notify of a common, or in some cases special, event that has occurred, other messages indicate an error condition.&lt;br /&gt;You can hide selected SBIE messages from being popped up, using the below list:</source>
        <translation>Sandboxie potrebbe generare i &lt;a href= &quot;sbie://docs/ sbiemessages&quot;&gt;Messaggi SBIE&lt;/a&gt; nel log dei messaggi e mostrarli come popup. Alcuni messaggi sono informativi e notificano un evento comune, o in alcuni casi speciale, che si è verificato, mentre altri indicano una condizione di errore.&lt;br /&gt;Tramite l&apos;elenco in basso, è possibile nascondere i messaggi SBIE da non mostrare come popup:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="381"/>
        <source>Shell Integration</source>
        <translation>Integrazione sistema</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="391"/>
        <source>Windows Shell</source>
        <translation>Shell di Windows</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="500"/>
        <source>Run Sandboxed - Actions</source>
        <translation>Opzioni di avvio &lt;br /&gt;nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="564"/>
        <source>Start Sandbox Manager</source>
        <translation>Avvio del programma</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="657"/>
        <source>Icon</source>
        <translation>Icona</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="714"/>
        <source>Move Up</source>
        <translation>Sposta in alto</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="733"/>
        <source>Move Down</source>
        <translation>Sposta in basso</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="855"/>
        <source>Show &quot;Pizza&quot; Background in box list *</source>
        <translation>Mostra lo sfondo &quot;Pizza&quot; nell&apos;elenco delle aree virtuali *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="936"/>
        <source>Show overlay icons for boxes and processes</source>
        <translation>Mostra icone in rilievo per le aree virtuali e i processi</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="946"/>
        <source>Display Options</source>
        <translation>Opzioni di visualizzazione</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1043"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="929"/>
        <source>Alternate row background in lists</source>
        <translation>Alterna il colore delle righe negli elenchi</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1378"/>
        <source>Sandbox &lt;a href=&quot;sbie://docs/keyrootpath&quot;&gt;registry root&lt;/a&gt;: </source>
        <translation>&lt;a href=&quot;sbie://docs/keyrootpath&quot;&gt;Percorso del registro&lt;/a&gt; dell&apos;area virtuale: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1438"/>
        <source>Sandboxing features</source>
        <translation>Funzionalità di isolamento</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1334"/>
        <source>Sandboxie Config</source>
        <translation>Configurazione Sandboxie</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1603"/>
        <source>Clear password when main window becomes hidden</source>
        <translation>Cancella la password non appena la finestra viene nascosta</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1596"/>
        <source>Only Administrator user accounts can use Pause Forcing Programs command</source>
        <translation>Solo gli account Amministratore possono utilizzare la funzione «Sospendi programmi forzati»</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1518"/>
        <source>Sandbox &lt;a href=&quot;sbie://docs/filerootpath&quot;&gt;file system root&lt;/a&gt;: </source>
        <translation>&lt;a href=&quot;sbie://docs/filerootpath&quot;&gt;Percorso file system&lt;/a&gt; dell&apos;area virtuale: </translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="151"/>
        <source>Run box operations asynchronously whenever possible (like content deletion)</source>
        <translation>Avvia operazioni in modo asincrono quando possibile (es. eliminazione del contenuto)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="173"/>
        <source>Hotkey for terminating all boxed processes:</source>
        <translation>Tasto di scelta rapida per la chiusura di tutti i processi:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="486"/>
        <source>Always use DefaultBox</source>
        <translation>Usa sempre DefaultBox</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="429"/>
        <source>Show a tray notification when automatic box operations are started</source>
        <translation>Mostra notifica riguardante l&apos;avvio delle operazioni automatiche nell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1324"/>
        <source>Advanced Config</source>
        <translation>Configurazione avanzata</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1358"/>
        <source>Activate Kernel Mode Object Filtering</source>
        <translation>Attiva protezione processi in modalità kernel</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1610"/>
        <source>Only Administrator user accounts can make changes</source>
        <translation>Solo gli account Amministratore possono apportare modifiche</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1562"/>
        <source>Password must be entered in order to make changes</source>
        <translation>È necessario inserire la password per apportare modifiche</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1555"/>
        <source>Change Password</source>
        <translation>Modifica password</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1488"/>
        <source>Portable root folder</source>
        <translation>Percorso cartella portatile</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1468"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1398"/>
        <source>Sandbox default</source>
        <translation>Impostazioni globali</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1617"/>
        <source>Watch Sandboxie.ini for changes</source>
        <translation>Monitora Sandboxie.ini per eventuali modifiche</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="282"/>
        <source>Show recoverable files as notifications</source>
        <translation>Mostra i file da recuperare nella finestra delle notifiche</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="587"/>
        <source>Show Icon in Systray:</source>
        <translation>Icona nell&apos;area di notifica:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="399"/>
        <source>Show boxes in tray list:</source>
        <translation>Mostra nell&apos;icona di notifica:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="65"/>
        <source>General Options</source>
        <translation>Opzioni generali</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="514"/>
        <source>Add &apos;Run Un-Sandboxed&apos; to the context menu</source>
        <translation>Aggiungi l&apos;opzione «Avvia all&apos;esterno dell&apos;area virtuale» al menu contestuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1070"/>
        <source>Graphic Options</source>
        <translation>Opzioni grafiche</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1448"/>
        <source>Use Windows Filtering Platform to restrict network access</source>
        <translation>Usa la piattaforma di filtraggio di Windows per limitare accesso di rete</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1455"/>
        <source>Hook selected Win32k system calls to enable GPU acceleration (experimental)</source>
        <translation>Usa chiamate di sistema Win32k per accelerazione GPU (sperimentale)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="462"/>
        <source>Use Compact Box List</source>
        <translation>Usa elenco ridotto di opzioni</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="787"/>
        <source>Interface Config</source>
        <translation>Configurazione interfaccia</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="912"/>
        <source>Make Box Icons match the Border Color</source>
        <translation>Imposta le icone dell&apos;area virtuale in modo che corrispondano al colore del bordo</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="902"/>
        <source>Use a Page Tree in the Box Options instead of Nested Tabs *</source>
        <translation>Usa una struttura ad albero nelle opzioni dell&apos;area virtuale invece di schede annidate *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="895"/>
        <source>Interface Options</source>
        <translation>Opzioni di interfaccia</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="815"/>
        <source>Use large icons in box list *</source>
        <translation>Usa icone grandi nell&apos;elenco delle aree virtuali *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="957"/>
        <source>High DPI Scaling</source>
        <translation>Ridimensionamento DPI elevati</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="878"/>
        <source>Don&apos;t show icons in menus *</source>
        <translation>Non mostrare icone nei menu *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="919"/>
        <source>Use Dark Theme</source>
        <translation>Usa tema scuro</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="137"/>
        <source>Recovery Options</source>
        <translation>Opzioni di recupero</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="422"/>
        <source>Start Menu Integration</source>
        <translation>Integrazione menu Start</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="507"/>
        <source>Scan shell folders and offer links in run menu</source>
        <translation>Scansiona le cartelle della shell e offri collegamenti nel menu di esecuzione</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="528"/>
        <source>Integrate with Host Start Menu</source>
        <translation>Integrazione con il menu Start dell&apos;host</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="967"/>
        <source>Font Scaling</source>
        <translation>Ridimensionamento caratteri</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1029"/>
        <source>(Restart required)</source>
        <translation>(Riavvio richiesto)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="825"/>
        <source>* a partially checked checkbox will leave the behavior to be determined by the view mode.</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo per ragioni di lunghezza</translatorcomment>
        <translation>* le caselle di controllo con selezione parziale funzioneranno
in modo diverso a seconda dell&apos;interfaccia di visualizzazione.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="805"/>
        <source>Use Fusion Theme</source>
        <translation>Usa tema Fusion</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="845"/>
        <source>Use new config dialog layout *</source>
        <translation>Usa il nuovo layout della finestra di configurazione dell&apos;area virtuale *</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1508"/>
        <source>Use a Sandboxie login instead of an anonymous token (experimental)</source>
        <translation>Usa autenticazione di Sandboxie invece di un token anonimo (sperimentale)</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1641"/>
        <source>Program Alerts</source>
        <translation>Avvisi dei programmi</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="652"/>
        <location filename="Forms/SettingsWindow.ui" line="1663"/>
        <location filename="Forms/SettingsWindow.ui" line="1773"/>
        <location filename="Forms/SettingsWindow.ui" line="1906"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1668"/>
        <source>Path</source>
        <translation>Percorso</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1690"/>
        <source>Remove Program</source>
        <translation>Rimuovi programma</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1676"/>
        <source>Add Program</source>
        <translation>Aggiungi programma</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1711"/>
        <source>When any of the following programs is launched outside any sandbox, Sandboxie will issue message SBIE1301.</source>
        <translation>Quando uno dei seguenti programmi viene avviato all&apos;esterno dell&apos;area virtuale, Sandboxie mostrerà il messaggio SBIE1301.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1721"/>
        <source>Add Folder</source>
        <translation>Aggiungi cartella</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1704"/>
        <source>Prevent the listed programs from starting on this system</source>
        <translation>Blocca l&apos;esecuzione dei programmi elencati all&apos;esterno dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1683"/>
        <source>Issue message 1308 when a program fails to start</source>
        <translation>Mostra messaggio 1308 quando un programma non viene avviato</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="345"/>
        <source>This option also enables asynchronous operation when needed and suspends updates.</source>
        <translation>Questa opzione abilita anche il funzionamento asincrono quando necessario e sospende gli aggiornamenti.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="348"/>
        <source>Suppress pop-up notifications when in game / presentation mode</source>
        <translation>Sopprimi le notifiche a comparsa quando si è in modalità gioco/presentazione</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="797"/>
        <source>User Interface</source>
        <translation>Interfaccia utente</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="630"/>
        <source>Run Menu</source>
        <translation>Menu Avvia</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="682"/>
        <source>Add program</source>
        <translation>Aggiungi programma</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="740"/>
        <source>You can configure custom entries for all sandboxes run menus.</source>
        <translation>È possibile configurare voci personalizzate per tutti i menu Avvia nelle aree virtuali.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="762"/>
        <location filename="Forms/SettingsWindow.ui" line="1853"/>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="662"/>
        <source>Command Line</source>
        <translation>Riga di comando</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1084"/>
        <source>Support &amp;&amp; Updates</source>
        <translation>Supporto e aggiornamenti</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1405"/>
        <source>Default sandbox:</source>
        <translation>Area virtuale predefinita:</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1547"/>
        <source>Sandboxie.ini Presets</source>
        <translation>Opzioni Sandboxie.ini</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1631"/>
        <source>Program Control</source>
        <translation>Controllo programmi</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1697"/>
        <source>Issue message 1301 when forced processes has been disabled</source>
        <translation>Mostra messaggio 1301 quando i processi forzati sono stati disabilitati</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1735"/>
        <source>App Templates</source>
        <translation>Modelli applicazioni</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1745"/>
        <source>App Compatibility</source>
        <translation>Compatibilità applicazioni</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1765"/>
        <source>In the future, don&apos;t check software compatibility</source>
        <translation>Non controllare la compatibilità dei programmi in futuro</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1781"/>
        <source>Enable</source>
        <translation>Attiva</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1801"/>
        <source>Disable</source>
        <translation>Disattiva</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1808"/>
        <source>Sandboxie has detected the following software applications in your system. Click OK to apply configuration settings, which will improve compatibility with these applications. These configuration settings will have effect in all existing sandboxes and in any new sandboxes.</source>
        <translation>È stata rilevata la presenza dei seguenti programmi nel sistema. Fare click su OK per applicare le configurazioni che miglioreranno la compatibilità con questi programmi. Le configurazioni verranno applicate a tutte le aree virtuali, esistenti e non.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1821"/>
        <source>Local Templates</source>
        <translation>Modelli locali</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1872"/>
        <source>Add Template</source>
        <translation>Aggiungi modello</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1892"/>
        <source>Text Filter</source>
        <translation>Cerca</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1914"/>
        <source>This list contains user created custom templates for sandbox options</source>
        <translation>Questo elenco contiene i modelli personalizzati creati dall&apos;utente per le opzioni dell&apos;area virtuale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1931"/>
        <source>Edit ini Section</source>
        <translatorcomment>Qui ho forzato di proposito un ritorno a capo</translatorcomment>
        <translation>Modifica configurazione
globale</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1940"/>
        <source>Save</source>
        <translation>Salva</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1947"/>
        <source>Edit ini</source>
        <translation>Modifica Sandboxie.ini</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1973"/>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1134"/>
        <source>Version Updates</source>
        <translation>Aggiornamenti di versione</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1195"/>
        <source>New full versions from the selected release channel.</source>
        <translation>Nuove versioni complete dal canale di rilascio selezionato.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1131"/>
        <source>Hotpatches for the installed version, updates to the Templates.ini and translations.</source>
        <translation>Correzioni per la versione installata, aggiornamenti ai file Templates.ini e translations.7z.</translation>
    </message>
    <message>
        <location filename="Forms/SettingsWindow.ui" line="1158"/>
        <source>In the future, don&apos;t notify about certificate expiration</source>
        <translation>Non notificare la scadenza del certificato in futuro</translation>
    </message>
</context>
<context>
    <name>SnapshotsWindow</name>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="32"/>
        <source>SandboxiePlus - Snapshots</source>
        <translation>Sandboxie Plus - Istantanee</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="60"/>
        <source>Selected Snapshot Details</source>
        <translation>Dettagli sull&apos;istantanea selezionata</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="66"/>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="120"/>
        <source>Description:</source>
        <translation>Descrizione:</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="101"/>
        <source>When deleting a snapshot content, it will be returned to this snapshot instead of none.</source>
        <translation>Quando si elimina il contenuto di un&apos;istantanea, verrai reindirizzato a questa istantanea invece che su nessuna.</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="104"/>
        <source>Default snapshot</source>
        <translation>Istantanea predefinita</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="139"/>
        <source>Snapshot Actions</source>
        <translation>Azioni</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="189"/>
        <source>Remove Snapshot</source>
        <translation>Elimina istantanea</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="208"/>
        <source>Go to Snapshot</source>
        <translation>Ripristina istantanea</translation>
    </message>
    <message>
        <location filename="Forms/SnapshotsWindow.ui" line="157"/>
        <source>Take Snapshot</source>
        <translation>Crea istantanea</translation>
    </message>
</context>
</TS>
