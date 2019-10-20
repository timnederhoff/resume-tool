node('dockerhost') {

  def dockerImage;

  stage('checkout') {
    checkout scm
  }

  docker.image('node:10.16.3').inside {
    withEnv(['npm_config_cache=npm-cache', 'HOME=.']) {
      stage('install') {
        sh 'npm install'
      }

      stage('build') {
        sh 'npm run build'
      }
    }
  }

  stage('containerize') {
    dockerImage = docker.build("resume-tool:$BUILD_NUMBER")
  }

  if (BRANCH_NAME.endsWith('master')) {
    stage('deploy') {
      def containerName = 'resume-tool'
      sh "docker stop ${containerName} || true"
      sh "docker wait ${containerName} || true"
      sh "docker rm -f ${containerName} || true"

      def arguments = [
        "--name ${containerName}",
        '-e VIRTUAL_HOST=resume-tool.dev.timnederhoff.nl',
        '-e LETSENCRYPT_HOST=resume-tool.dev.timnederhoff.nl',
        '--expose 80',
        '--restart=always'
      ].join(' ')
      dockerImage.run(arguments)
    }
  }
}
