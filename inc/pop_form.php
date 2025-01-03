<div class="blur-overlay" id="joinWaitlistModal">
            <div class="dialog-box">
                <div class="head">
                    <h5>Get Started</h5>
                    <div class="close" id="closeModal">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="content">
                    <div class="container">
                        <div class="row mb-4">
                            <form class="php-email-form" method="post">        
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Name" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="company" class="form-label">Email</label>
                                            <input type="text" class="form-control" name="email" id="email" placeholder="Enter Email id" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Phone Number</label>
                                            <div class="input-group flex-nowrap">
                                                <input type="number" class="form-control" name="phone" id="phone" onKeyPress="if(this.value.length==10) return false;" aria-describedby="phone" placeholder="Enter Phone Number" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="phone" class="form-label">Select Product</label>
                                            <div class="input-group flex-nowrap">
                                                <select class="form-control" name="count" id="count" placeholder="----------Select option----------" required>
                                                    <option>----------Select option----------</option>
                                                    <option value="2G Telematics Devices">2G Telematics Devices</option>
                                                    <option value="4G Telematics Devices">4G Telematics Devices</option>
                                                    <option value="Fuel Monitoring Devices">Fuel Monitoring Devices</option>
                                                    <option value="Digital Lock">Digital Lock</option>
                                                    <option value="Load Balancer">Load Balancer</option>
                                                    <option value="Weighbridge System">Weighbridge System</option>
                                                    <option value="Telematics Technology">Telematics Technology</option>
                                                    <option value="Fintech Technology">Fintech Technology</option>
                                                    <option value="Business Automation">Business Automation</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12">
                                        <div class="mb-4">
                                            <label for="website" class="form-label">Message</label>
                                            <div class="input-group flex-nowrap">
                                                <textarea type="text" class="form-control" rows="5" name="website" id="website" placeholder="Enter your message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row align-items-center justify-content-center text-center">
                                    <div class="col">
                                        <button type="submit" class="solid-action-btn m-0" id="submitEmailForm">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>