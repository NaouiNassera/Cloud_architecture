<h1>Création de VM windows</h1>
<p> Deploy a Windows VM machine in Azure + Configure VM sizes, storage options, and networking settings.</p>
<ul>
<li>name of the machine : myWindowsVM </li>
<li>size of the machine : Standard B1s ( 1 Go RAM - 1 CPU)</li>
<li>PUBLIC ip adress : 20.63.136.12</li>
<li>Private IP address : 10.2.1.4</li>
<li>Virtual network/subnet : H3hitema_Vnet/FrontendSubnet</li>
</ul>

[Windows VM machine](/Lab1/vm_windows.png)


<h1>Création de VM Linux</h1>
<p> Deploy a Linux VM machine in Azure + Configure VM sizes, storage options, and networking settings.</p>
<ul>
<li>name of the machine : MyLinuxVm</li>
<li>size of the machine : Standard B1s ( 1 Go RAM - 1 CPU)</li>
<li>PUBLIC ip adress : 20.243.81.124</li>
<li>Private IP address : 10.2.2.4</li>
<li>Virtual network/subnet : H3hitema_Vnet/BackendSubnet</li>
</ul>

[Linux VM machine](/Lab1/LINUXVM.png)<br/>
[Linux VM machine](/Lab1/LINUXVM1.png)<br/>
[Linux VM machine](/Lab1/LINUXVM2.png)<br/>
[Linux VM machine](/Lab1/LINUXVM3.png)<br/>
[Linux VM machine](/Lab1/LINUXVM4.png)<br/>
[Linux VM machine](/Lab1/LINUXVM5.png)<br/>
[Linux VM machine](/Lab1/LINUXVM6.png)<br/>
[Linux VM machine](/Lab1/LINUXVM7.png)<br/>




<h1> Connection à la VM Linux via SSH</h1>

<li>install extensions : azure tools et remote-SSH </li>
<li>generate ssh key  : ssh-keygen -t rsa -b 4096 -C "nasseranaoui2@gmail.com"</li>
<li>>righ click on connect with SSH</li>
<li>choose the os system : linux then enter the passphrase </li>
<li>you'll have a new windows opened on the terminal of vscode u'll have the terminal of ur VM</li>

[Linux Vm Connected with SSH](/Lab1/Connect_to_vm%20windows.png)


<h1> Install software on the VMs </h1>

<li>the software to install is nginx</li>
<li>sudo apt update </li>
<li>sudo apt install nginx</li>
<li>to verify if it was successfull nginx -v to show the version</li>


[server nginx installed](/Lab1/install_software_vm_linux.png)
[version of nginx](/Lab1/installed_nginx_onvm.png)


