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
       ls -l
       ls -la
       """.stripIndent().trim()
     }
   }
   stage('Deploy Reactjs') {
     steps {
       echo 'Deploying Reactjs...'
       sh """ 
        ls -ls
        ls -la
       """..stripIndent().trim()
     }
   }
  }
}
