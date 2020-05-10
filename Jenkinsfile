pipeline {
   agent any

   stages {
      stage('Build') {
        steps {
          echo 'Building...'
          echo "Running ${env.BUILD_ID} ${env.BUILD_DISPLAY_NAME} on ${env.NODE_NAME} and JOB ${env.JOB_NAME}"
        }
   }
   stage('Test') {
     steps {
        echo 'Testing...'
     }
   }
   stage('Deploy Nodejs') {
     steps {
       echo 'Deploying Nodejs...'
       sh """
        'cd backend/'
       'ls -l'
       'npm i'
       'npm run server'
       """.stripIndent().trim()
     }
   }
   stage('Deploy Reactjs') {
     steps {
       echo 'Deploying Reactjs...'
       sh """ 
        'cd client/'
       'npm i'
       'npm start'
       """..stripIndent().trim()
     }
   }
  }
}
