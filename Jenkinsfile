pipeline {
agent any

environment {
    DOCKER_IMAGE = "shivanisharma21/ecommerce-backend"
    IMAGE_TAG = "${BUILD_NUMBER}"
}

stages {

    stage('Checkout') {
        steps {
            git branch: 'main',
                credentialsId: 'github-creds',
                url: 'https://github.com/2121-shivi/ecommerce-devops-platform.git'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh '''
            cd backend
            docker build -t $DOCKER_IMAGE:$IMAGE_TAG .
            '''
        }
    }

    stage('Docker Login') {
        steps {
            withCredentials([
                usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )
            ]) {
                sh '''
                echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                '''
            }
        }
    }

    stage('Push Image') {
        steps {
            sh '''
            docker push $DOCKER_IMAGE:$IMAGE_TAG
            '''
        }
    }
}

post {
    success {
        echo 'Pipeline completed successfully!'
    }
    failure {
        echo 'Pipeline failed!'
    }
}


}

