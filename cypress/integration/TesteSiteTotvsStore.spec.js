/// <reference types = "cypress"/>

const el = require('../support/elementos').ELEMENTS

describe('TesteFuncionalidade', () => {

    it('Teste Caso 3 - Criar Nova Conta', () => {
        
    //ACESSO A URL TOTVS STORE
        cy.visit('https://dev.totvs.store/br/')
            .should('be.exist')
        
    //NOVO CADASTRO
        //Clicar no menu Criar Conta
        cy.get(el.mnCriarConta).contains('Criar Conta').eq(0)
            .should('be.visible')
            .click()

        //Inserir CPF
        cy.get('input[id="taxvat"]')
            .should('be.visible')
            .type('28616543848')

        //Inserir Telefone
        cy.get('input[id="celular_validacao"]')
            .should('be.visible')
            .type('11996263704')

        //Autorizar envio de SMS
        cy.get('input[id="autorizacao_sms"] ')
            .should('be.visible')
            .check()

        //Autoricar contato através de WhatSapp
        cy.get('input[id="autorizacao_whatsapp"] ')
            .should('be.visible')
            .check()

        //Clicar no botão "PRÓXIMA"
        cy.get(el.btProxima)
            .should('be.visible')
            .click()
            .wait(10000)

    /*DADOS CADASTRAIS*/
        //Inseri E-mail
        cy.get('input[id="email_address"]')
            .should('be.exist')
            .type('lssirio@gmail.com')
            .wait(5000)
        
        //Inserir Primeiro Nome
        cy.get('input[id="firstname"]')
            .should('be.exist')
            .click()
            .type('Luciano')
                        
        //Inserir Segundo Nome
        cy.get('input[id="lastname"]')
            .should('be.exist')
            .type('Sirio')
                       
        //Inserir outro telefone para contato
        cy.get('input[id="telephone"]')
            .should('be.exist')
            .type('11974716582')
                        
        //Inserir Data de Nascimento
        cy.get('input[id="dob"]')
            .should('be.exist')
            .type('19071981')
        cy.get('fieldset[id="step2"]')
            .click()
            
        //Criar Senha
        cy.get('input[id="password"]')
            .should('be.exist')
            .type('@Luci@no81')
                        
        //Inserir senha criada para confirmação    
        cy.get('input[id="password-confirmation"]')
            .should('be.exist')
            .type('@Luci@no81')
            
        //Termo de Uso e de Privacidade
        cy.get('input[id="aceite_termo_uso"]')
            .should('be.exist')
            .check({force: true})
            .wait(20000)


        /* Bug indentificado:
            
            - Código para validação não encaminhado para os canais de comunicação (e-mail / celular) informado...
        
        //Inserir código de validação
        cy.get('input[id="codigoPin"]')
            .should('be.exist')
            .type('?')
            
        //Clicar no botão "CONCLUIR"
        cy.get('input[id="nextStep3"]')
            .should('be.visible')
            .click({)
        */
    })
    

    it('Teste Caso 5 - Comprar Produto', () => {
    
    /*COMPRA DE PRODUTOS*/
        //Acesso a Url da TOTVS STORE
        cy.visit('https://dev.totvs.store/br/') 
            .should('be.exist')

        //Clicar no botão "Ver mais"
        cy.get(el.btVermais)
            .should('be.visible')
            .click()
            
        //Clicar no botão "Adicionar Carrinho"
        cy.get(el.btAdCarrinho)
            .should('be.visible')
            .click()
            .wait(10000)

        //Clicar no botão "Fechar Pedido"
        cy.get(el.btFPedido)
            .should('be.visible')
            .click()
    })
})

