<h1>Deploy Azure Load Balancer to distribute traffic across VMs</h1>

<li>Deploy Azure Load Balancer</li>
<li>Type: Public</li>
<li>Assign a Public IP</li>
<li>Create a new backend pool and associate it with your VMs</li> 
<br/>


[load balancer](/Lab9/load_balancer.png)<br/>
[BackendPool](/Lab9/backendPool.png)<br/>
[FrontendIp](/Lab9/FrontendIP.png)<br/>

<h1>Configure health probes and load balancing rules.</h1>

<ul>

<li> Add a health probe for HTTP (port 80) </li>
<li> Create a rule for traffic distribution. </li>
<li> Frontend IP: Select the frontend IP </li>
<li> Backend Port: 80 for HTTP </li>

</ul>

[Load balancing rules](/Lab9/Load_balancing_rules.png) <BR/>
[Health probes](/Lab9/Health_probes.png) <BR/>
[created_load_balance](/Lab9/created_load_balancer%20.png)


<h1>Set up Azure Traffic Manager for DNS-based traffic routing</h1>

<ul>
    <li> Routing Method: Choose DNS-based routing </li>
    <li> Target Resource Type: Select Public IP Address. </li>
</ul>

[Endpoint ](/Lab9/endpoint.png)<br/>
[Endpoint created](/Lab9/endpoint_created.png)<br/>
[Dns-based traffic routting](/Lab9/Dns_problem.png)

<h1> Test failover scenarios. </h1>

<ul>
<li>  Simulate VM Failure </li>
<li> Verify Load Balancer Response </li>
<li> Restart the VM and Confirm Failback</li>
</ul>

[STEP1 test](/Lab9/test_failure_1.png)<br/>
[STEP2 test](/Lab9/test_failure_2.png)<br/>
[STEP3 test](/Lab9/test_failure_3.png)<br/>
[STEP4 test](/Lab9/test_failure_4.png)<br/>
[STEP5 test](/Lab9/test_failure_5.png)<br/>
[STEP6 test](/Lab9/test_failure_6.png)<br/>
[STEP7 test](/Lab9/test_failure_7.png)<br/>
[STEP8 test](/Lab9/test_failure_8_after_start_back.png)<br/>
