import React from "react";
import fs from "fs";
import path from "path";

function Story() {
  const textMainStory =
    "[....Weltname...], die Welt der Tiere, war immer eine Welt voller Frieden, in der sich in jeglicher Sicht unterstützt wurde. Riesige Städte in der Erde, auf dem Wasser oder in und auf den Wipfeln von Bäumen erstreckten sich in ihren Teretorien, so weit das Auge reichte. In den Hauptstädten florierte der Handel in einem unglaublichen Ausmaß. Jede Rasse hatte ihre Zuständigkeit und ihren Ruf innerhalb der Gesellschaft und war für etwas anderes verantwortlich. Während die Adler als Lufteinheit für das Auskundschaften neuer Gebiete und die Rettung vermisster Tiere auserkoren waren, gehörten die Nielpferde und Pelikane zum Trupp gegen Waldbrände. Steinböcke und Maulwürfe waren für den Abbau von Steine zuständig, während die Ochsen den Transport übernahmen. Doch eines Nachts ereignete sich ein schreckliches Ereignis, welches als die große Katastrophe bekannt wurde, welches das Leben in dieser friedlichen Welt für immer verändern sollte. Eine riesige Druckwelle breitete sich über das Land aus und verzauberte viele Völker über Nacht.... Wochen vergingen. Lösungen für die größten Probleme wurden gefunden und das Land erholt sich, wenn auch nur schwer. Dennoch: Arbeitsrollen wurden neu verteilt und das Machtverhältnis zwischen der einzelnen Rassen veränderte sich drastisch. Gewalt, welche es zuvor nie gegeben hatte, entstand in den Städten und es wurde die Order all Animals, kurz OaA eingeführt, die als eine von zwei Einheiten nicht nur aus einer Rasse bestand, sondern jeden akzeptiert, der/die einen gewissen Test bestand und danach eine Ausbildung absolvierte. So konnte keine Rasse die Authorität in Frage stellen. Wie auch die OaA entstand eine weitere, rassenunabhängige Gemeinschaft, namens Die Gilde. Die Verzauberungen der großen Katastrophe erweckte in vielen den Drang nach Erkundungen und Abenteuern und diese Gilde bot einen Platz für genau diese Art von Tieren. Aufgaben, die von umliegenden Dörfern oder einzelnen Familien konnten hier gegen [....Währung....] angenommen werden. Dennoch ist bis heute das Rätsel um die große Katastrophe ungelöst. Gerüchte über eine Art geheimer Bund sind im Umlauf aber handfeste Beweise scheint es nicht zu geben. Vielleicht wird sich ja eines Tages jemand diese Aufgabe voller Tatendrang annehmen und der Sache auf den Grund gehen. Man weiß ja nie: War es nur eine einmaliges Ereignis und wenn nicht+COMMA+ welche Folgen könnten das nächste Mal entstehen?";

  const data = {textMainStory: textMainStory.split(", ")};

  const json = path.join(
    process.cwd(),
    "src/assets/storytelling",
    "maindata.json"
  );
  fs.writeFileSync(json, JSON.stringify(data));

  ////////////////////////////////////////////////////////////////////////////

  const textWiWa =
    "Die Geschichte der Wischi-Waschi-Bären reicht weit zurück. Ihre Handhabung mit Holz machte sie zu einer unglaublichen Handelsmacht für Waldstoffe. Das ganze Land war auf das Holz der Wi-Wa´s angewiesen und so war es nicht verwunderlich, dass sie sich etwas auf ihr Talent einbildeten und als arogant angesehen wurden. Aus Gründen der Eitelkeit hatten sie sich vom Boden abgewandt und sind in die Baumwipfel umgezogen. Gigantische Städte entstanden über die Zeit, welche technologisch immer weiter fortschritten. Die letzten Strahlen der untergehenden Sonne tauchten den dichten Wald in ein warmes, goldenes Licht. Zwischen den mächtigen Bäumen, deren Blätter sanft im Abendwind raschelten, wurde es langsam still und nur vereinzelt waren noch Lichter in den Bauten der Waldbewohner zu erhaschen. In dieser Nacht geschah die große Katastrophe und ließ alle schlafenden Waschbären im gesamten Wald nie wieder aufwachen. In dieser Nacht schien es sogar, das selbst die Bäume schlafen würden, während jegliches Leben in eine tiefe Ruhe verfallen schien. Du, der /die diese Nacht Wachdienst hattest, wurdest wahrlich Zeuge dieses mächtigen Zaubers und bist nun eine/r der wenigen Wischi-Waschi-Bären, die nicht von dem unheimlichen Schlafzauber ergriffen worden. Das Chaos am nächsten Morgen war unbeschreiblich und es dauerte seine Zeit, um wieder Struktur in das ganze System zu integrieren. Während dieser Zeit hörtest du von einer Schriftrolle, welche jede Art von Magie, und sei sie noch so mächtig, neutralisieren kann. Wenige Wochen nach Eingliederung der Umstrukturierung wurde dir bewusst, dass du nach dem Ursprung allen Übels suchen musstest. Mit der Überzeugung, die  Lösung für das Rätsel zu finden, das sein Volk in einen endlosen Schlaf versetzt hatte, brichst du nun in eine unbekannte Welt auf...";

  const dataWiWa = {textWiWa: textWiWa.split(", ")};

  const jsonWiWa = path.join(
    process.cwd(),
    "src/assets/storytelling",
    "wiwadata.json"
  );

  fs.writeFileSync(jsonWiWa, JSON.stringify(dataWiWa));
  return (
    <div>
      story
      <div>
        <p>JSON Datei wurde erstellt!</p>
      </div>
    </div>
  );
}

export default Story;
