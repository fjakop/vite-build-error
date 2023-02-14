# @skp-bankorga/ui-components

## Commits

Commit-Kommentare müssen dem [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) Schema entsprechen.

Beispiel

    feat(ui): Feld "Vorname" rechtsbündig anzeigen
    
    BO-1234 UI überarbeiten

Ein Commit auf den `master`-Branch erzeugt ein Release nach dem [SemVer](https://semver.org/)-Schema auf dem Dist-Tag `@latest`.

Commits auf den Branches `alpha` und `beta` erzeugen Pre-Releases mit gleichnamigen Dist-Tags.

## Verwendung

Je nach gewünschter Version entweder direkt eine Version angeben

    npm i mypackage@1.7.3

Wahlweise kein oder ein Dist-Tag angeben, z.B.

    npm i mypackage
    npm i mypackage@latest
    npm i mypackage@alpha
    npm i mypackage@story-BO-1234-ui-ueberarbeiten

## Wie baue ich eine Version eines Feature-Branches?

Namenskonvention: RegEx `^story-[a-zA-Z0-9-]+`, der Branchname startet mit "story-" und enthält danach nur noch Buchstaben, Ziffern und Bindestriche. Es ist mindestens ein Zeichen nach "story-" erforderlich.

## Wie baue ich eine Version eines Task-Branches?

Namenskonvention: RegEx `^task-[a-zA-Z0-9-]+`, der Branchname startet mit "task-" und enthält danach nur noch Buchstaben, Ziffern und Bindestriche. Es ist mindestens ein Zeichen nach "task-" erforderlich.

## Wie baue ich eine Version eines Bugfix-Branches?

Namenskonvention: `N.N.x` oder `N.x.x` oder `N.x`, wobei N eine positive Ganzzahl ist, z.B. 1.12.x als Bugfixes auf Version 1.12.

## Wie baue ich ein Release?

Versionen von Feature- oder Task-Branches werden als Pre-Releases gebaut und kommen damit nicht in Produktion. 

Um das zu erreichen, muss mein Branchname folgenden Konventionen entsprechen:

* master - jeder Push erzeugt ein "reguläres" Release (z.B. 1.7.3)
* Bugfix-Branch - jeder Push erzeugt ein Release, dessen Versionsnummer in der erlaubten Range liegen muss. Ein Branch 1.12.x kann also nur die Patch-Version hochzählen, nicht die Minor-Version. Wird versucht, z.B. ein Feature auf einem Bugfix-Branch zu bauen, erzeugt der Build einen Fehler

  `EINVALIDNEXTVERSION The release '1.13.0' on branch '1.12.x' cannot be published as it is out of range.`

## GOTCHAS

### Bugfix-Version auf Bugfix-Branch schlägt fehl

Immer, wenn eine zu erzeugende Version auf einem Bugfix-Branch noch auf regulären Release-Branches (z.B. master) möglich ist, wird ein Release des zugehörigen Bugfix-Branch fehlschlagen.

Beispiel:

* Release 1.5.0 auf master erzeugen
* Branch 1.5.x von master erzeugen
* Release 1.5.1 auf Branch 1.5.x erzeugen


    EINVALIDNEXTVERSION The release `1.5.1` on branch `1.5.x` cannot be published as it is out of range.
    Based on the releases published on other branches, only versions within the range >=1.5.0 <1.5.0 can be published from branch 1.5.x.

Das Bugfix muss in diesem Fall auf einem regulären Release-Branch erzeugt werden.


## Semantic Release lokal ausführen

Diese Variablen sollten normalerweise nur auf dem CI-Server gesetzt werden

    set GITLAB_TOKEN=<ein Access Token mit api & repository_write>
    set GITLAB_URL=https://gitlab.fisp.dev/
    # das Sternchen ist wichtig für semantic-release!
    set NO_PROXY=*.fisp.dev,.fisp.dev

Ausführen

    npm run semantic-release --dryRun
