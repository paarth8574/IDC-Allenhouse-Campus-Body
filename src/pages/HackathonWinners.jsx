import WinnersHero from "../components/events/winners/WinnersHero"
import WinnersChampion from "../components/events/winners/WinnersChampion"
import WinnersRunnersUp from "../components/events/winners/WinnersRunnersUp"
import WinnersConsolation from "../components/events/winners/WinnersConsolation"
import WinnersCTA from "../components/events/winners/WinnersCTA"

export default function HackathonWinners() {
  return (
    <>
      <WinnersHero />
      <WinnersChampion />
      <WinnersRunnersUp />
      <WinnersConsolation />
      <WinnersCTA />
    </>
  )
}