------------------------------------------------------
KURZANLEITUNG ZUR WARTUNG DER HOMEPAGE DES RSV KISSING
------------------------------------------------------


AKTUALISIEREN VON TERMINEN:
---------------------------
Termine sind in drei Kategorien Verein, Kunstrad und Radball eingeteilt.
Um die Termine einer Kategorie zu aktualisieren, muss die entsprechende Datei
termine-verein.html, termine-kunstrad.html bzw. termine-radball.html editiert werden.
Die Datei termine.html muss dabei NICHT verändert werden, da diese nur den Overhead und
das Design der Termine auf der Homepage beinhaltet.
---------------------------


EINTRAGEN VON BLOGEINTRÄGEN AUF DER STARTSEITE:
-----------------------------------------------
Um einen neuen Blogeintrag hinzuzufügen, muss unter <div class="rightcolumn">
ein neuer Eintrag der Form
  <div class="card">
    <center>
      <h2>Titel des Beitrages</h2>
      <h5>Datum im Format dd.mm.yyyy</h5>
      <img src="Speicherort des Fotos_reduced" style="max-width: 100%" />
      <p>
        <table style="border-collapse: separate; border-spacing: 15px 0;">
          <tr>
            <td><a href="Link auf die Tabelle">Beschreibung des Links</a></td>
            <td><a href="Link auf den Zeitungsartikel">Beschreibun des Links[AZ, dd.mm.yyyy]</a></td>
          </tr>
        </table>
      </p>
    </center>
  </div>
hinzugefügt werden.
Das dafür verwendete Foto muss vorher im Ordner /attachments/Image mit einem Namen, der aus
dem Datum der Aufnahme wie folgt besteht yyyymmdd.jpg gespeichert werden.
Für den Blogeintrag sollte dann jedoch eine (z.B. mittels Gimp) auf 550px Höhe skalierte Version
des Bildes verwendet werden. Diese skalierte Version sollte unter dem Namen yyyymmdd_reduced.jpg
im selben Ordner wie das Orginal abgespeichert werden.
-----------------------------------------------


