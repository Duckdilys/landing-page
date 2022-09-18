docker build -f Dockerfile -t mh-registry:5555/mh_digital_landing_page:v1.0.1 .
docker push mh-registry:5555/mh_digital_landing_page:v1.0.1

ssh root@174.138.26.5 'sh /root/restart_fe.sh'
#ssh centos@18.140.237.112 "docker pull mhhub.mhsolution.vn/mh_landing_page:v1.0.0"
#ssh centos@18.140.237.112 "docker rm -f mh-lading-page"
#ssh centos@18.140.237.112 "docker run --name mh-digital-lading-page -p 9703:3000 -d mh-registry:5555/mh_digital_landing_page:v1.0.0"
#ssh centos@18.140.237.112 "docker images | grep 'mhhub' |  xargs docker rmi"
