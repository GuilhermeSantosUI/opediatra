@Library('jenkins-library') _
pipeline {
    agent {label 'docker-slave'}
    parameters {
        string(name: 'PROJETO', defaultValue: 'opediatra', description: 'Digite o nome do projeto:')
        choice(name: 'AMBIENTE', choices: ['HML','BETA','PRD'], description: 'Selecione o Ambiente para publicação:')
        string(name: 'TAG', defaultValue: '', description: 'Digite a tag da imagem caso deseje republicar uma versão já existente:')
    }
    environment {
        DOCKERIMAGE = " "
        MAIL_NOTIFICATION_RECIPIENTS = "rafael.deda@gmail.com"
    }
    stages{
        stage('Build e Construção da Imagem') {
            when {
                environment name: 'TAG', value: ''
            }
            steps{
                script{
                    DOCKERIMAGE = buildImages(DOCKERIMAGE)
                }
            }
        }

        stage('Submeter Imagem ao Registry') {
            when {
                environment name: 'TAG', value: ''
            }
            steps{
                script{
                    DOCKERIMAGE = publishImages(DOCKERIMAGE)
                }
            }
        }
        stage('Deploy no Ambiente Selecionado no Cluster') {
            when {
                anyOf {
                    environment name: 'AMBIENTE', value: 'BETA'
                    environment name: 'AMBIENTE', value: 'PRD'
                }
            }
            steps {
                deployCluster()
            }
        }

        stage('Deploy no Ambiente on Promise') {
            when {
                allOf {
                    environment name: 'AMBIENTE', value: 'HML'
                    environment name: 'ON_PROMISE', value: '1'
                }
            }
            steps{
                deployCluster('k8s-inovesolutions-hml')
            }
        }

        // stage('Limpando Imagens') {
        //     agent {label 'conteiner'}
        //     steps{
        //         limpandoImagens()
        //     }
        // }
    }
    post {
        always {
            //sendNotification()
            cleanWorkspace()
        }
    }
}
