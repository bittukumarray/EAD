import requests
import time
url = 'http://localhost:5000/api/filter/create-es-index'
while(True):
    res = requests.post(url)
    success = res.json().get('success')
    if success:
        print('Populated')
    else:
        print('Elastic Search not connected , docker-compose up -d ')
    time.sleep(10)
