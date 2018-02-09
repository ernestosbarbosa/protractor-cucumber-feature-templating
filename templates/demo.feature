#language: en
#encoding: utf-8

@wip
Feature: Angular Material Components

    Scenario Outline: Validate Input Fields
        Given I went to menu <menu>, submenu <submenu>
        When I fill the input field with <text>
        And select the Pick one option
        Then should display a modal with the message <text>

    Examples:
        | menu                            | submenu | text        |
        | Popups & Modals, section toggle | dialog  | ${mensagem} |
