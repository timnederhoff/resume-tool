import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface WorkItem {
  company: string;
  summary: string;
  startDate: string;
  endDate: string;
  role: string;
  position: number;
  activities: string[];
  process: string[];
  codingLanguages: string[];
  testTypes: string[];
  tools: string[];
}

const WORK_DATA: WorkItem[] = [
  {
    position: 1,
    company: 'Sociale Verzekeringsbank - Webkanalen',
    role: 'Test Automation Engineer',
    startDate: '2017-07-11',
    endDate: 'Present',
    summary: 'Tijdens de POC fase voor de opzet van een nieuwe ontwikkelomgeving verzorgde Tim de inrichting van de testautomatisering. Daarvoor zette hij de teststrategie op waarmee de geautomatiseerde testen integraal onderdeel van de CI/CD oplossing werden. Angular applicaties werden getest door Cucumber, Protractor, Galen en Pa11y waar de backend Java Spring applicaties werden getest met Cucumber-JVM en Rest-assured. Stubs voor de backend applicaties heeft hij opgezet met Wiremock. De (test) applicaties heeft hij zoveel mogelijk met Docker weten te containeriseren waardoor testen geïsoleerd uitgevoerd konden worden.',
    activities: [
      'Testautomatisering ontwerp',
      'CI pipeline inrichting'
    ],
    process: ['Testautomatisering', 'Testrapportage', 'service testing'],
    codingLanguages: ['Java', 'Groovy', 'Javascript', 'Bash', 'Docker', 'YAML'],
    testTypes: ['KT', 'GAT', 'PAT', 'IT'],
    tools: ['Maven', 'NPM/Nodejs', 'Jenkins', 'Selenium Webdriver', 'Protractor', 'REST-assured', 'Wiremock', 'Cucumber', 'Pa11y', 'Galen', 'Ansible', 'Docker', 'Angular', 'Artifactory', 'Jira', 'Confluence', 'IntelliJ', 'Spring boot']
  },
  {
    position: 2,
    company: 'Rabobank Nederland - Programma Online',
    role: 'Test Automation Engineer',
    startDate: '2015-06-01',
    endDate: '2017-06-22',
    summary: 'Als lid van een ondersteunend team voor de inrichting van verschillende testomgevingen, neemt Tim verschillende rollen in. Hoofdtaak was hier het opzetten van een automatiseringsframework. Dit framework dat hij schrijft in Java en met behulp van Maven, JUnit, Selenium webdriver en Cucumber, heeft inmiddels de volwassen fase bereikt. Verschillende interne teams maken nu gebruik van het framework om browsers en (mobiele) applicaties op PC\'s, tablets en smartphones aan te sturen voor hun testautomatisering. Configuratie en testdata heeft hij hierbij centraal opgeslagen, met REST interfaces kan deze data in het gewenste formaat opgehaald worden. Hierbij heeft Tim ook veel geleerd van robust programmeren en het schrijven van unit-tests. Uiteindelijk heeft Tim het project in een CI pipeline in Jenkins 2 geplaatst waarin de fases building, testing, release en deployment volledig geautomatiseerd zijn. Naast het framework werkt Tim aan de testomgeving. Hiervoor heeft hij een Selenium grid opgezet waarin zowel browsers als fysieke en gesimuleerde smartphones en tablets beschikbaar zijn. Hierbij combineerde hij Selenium Grid 2 met Appium om de aansturing te realiseren. Ansible scripts worden gebruikt om het grid en nodes weer te starten wanneer een probleem heeft voorgedaan. Om deze omgeving onderhoudbaar te houden en om monitoring te bewerkstelligen schreef hij een web applicatie in Java, Maven, Spring Boot, Thymeleaf, Javascript en Bootstrap. Met deze administratie applicatie die gebruikt maakt van een REST interface, maakte hij het mogelijk om de Selenium hub en de Nodes te beheren. Applicaties draaien op verschillende omgevingen (bijvoorbeeld productie, acceptatie, test) kunnen gesynchroniseerd worden. Hiervoor heeft Tim een tool geschreven in Java en Maven waarmee alle geïndexeerde applicaties vergeleken worden tussen omgevingen en bepaald kan worden welke versies gescynchroniseerd moeten worden. Zo worden applicaties automatisch gestopt, deployed en gestart.',
    activities: [
      'Testautomatisering framework ontwikkeling',
      'Testautomatisering ontwerp',
      'CI pipeline inrichting',
      'Testtool ontwikkeling',
      'Leveren support op interne en externe tooling'
    ],
    process: ['Testautomatisering', 'Testrapportage', 'service testing', 'mobile testing'],
    codingLanguages: ['Java', 'Groovy', 'Javascript', 'XML', 'Bash', 'Docker', 'YAML'],
    testTypes: ['KT', 'GAT', 'PAT', 'IT'],
    tools: ['Maven', 'Jenkins', 'Selenium Webdriver', 'Appium', 'REST-assured', 'Wiremock', 'Cucumber', 'Docker', 'Perfecto', 'Jira', 'Confluence', 'Stash', 'Sonatype Nexus', 'IntelliJ', 'Ansible', 'Spring MVC']
  }
];

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  work = new MatTableDataSource<WorkItem>(WORK_DATA);
  columnsToDisplay = ['select', 'title'];
  selection = new SelectionModel<WorkItem>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.work.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.work.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: WorkItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
